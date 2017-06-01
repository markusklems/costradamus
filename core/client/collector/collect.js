'use strict';

const finder = require('./finder.js');
const collectLambdaUsage = require('./collect-lambda-usage.js');
const collectDynamodbUsage = require('./collect-dynamodb-usage.js');
const collectKinesisUsage = require('./collect-kinesis-usage.js');

const fs = require('fs');

function collect(data) {
  return new Promise((resolve, reject) => {
    traverse(data).then(res => {
      // Ignore res, we directly mutated the input data!
      resolve(data);
    }).catch(err => reject(err));
  });
};

function readFromJsonFile(path) {
  return JSON.parse(fs.readFileSync(path));
}

async function traverse(fromNode) {
  let processedNodes = [];
  let promises = [];
  _traverse(fromNode);
  let toReturn = await Promise.all(promises);
  return toReturn;

  function _traverse(node) {
    //console.log("augmenting " + node.id);
    if (!processedNodes.find(id => node.id === id)) {
      let p = augment(node);
      processedNodes.push(node.id);
      promises.push(p);
    }

    if (node.Segments) {
      node.Segments.forEach(segment => {
        console.log("node.Segments augmenting " + segment.Document.id);
        _traverse(segment.Document);
      });
    } else if (node.subsegments) {
      node.subsegments.forEach(subsegment => {
        _traverse(subsegment);
      });
    }
  }
}

async function augment(document) {
  if (document.subsegments) {

    // Find Lambda usage segments
    let lambdaDoc = finder.lambdaUsageFinder(document);
    if (lambdaDoc) {
      //console.log("Found Lambda document", document.id);
      try {
        let res = await collectLambdaUsage(document);
        //document.resourceName = res.resourceName;
        //document.resourceId = res.resourceId;
        document.consumptions = res.consumptions;
        document.cost = res.cost;
      } catch (err) {
        console.error(err);
      }
    }

    // Find DynamoDB usage segments
    let dynamoUsageDocs = finder.dynamoUsageFilter(document);
    if (dynamoUsageDocs && dynamoUsageDocs.length > 0) {
      dynamoUsageDocs.forEach(dynamoDoc => {
        let latency = Math.ceil((document.end_time - document.start_time) * 1000);
        dynamoDoc.metadata.DynamoDBCostradamus.consumptions.Latency = {
          "val": latency,
          "type": "MS"
        };
        let res = collectDynamodbUsage(dynamoDoc);
        let metadata = res.metadata.DynamoDBCostradamus;
        //dynamoDoc.resourceName = metadata.resourceName;
        document.consumptions = metadata.consumptions;
        document.cost = res.cost;
      });
    }

    // Find Kinesis usage segments
    let kinesisUsageDocs = finder.kinesisUsageFilter(document);
    if (kinesisUsageDocs && kinesisUsageDocs.length > 0) {
      kinesisUsageDocs.forEach(kinesisDoc => {
        //console.log("Found kinesis document", kinesisDoc.id);
        let latency = Math.ceil((document.end_time - document.start_time) * 1000);
        kinesisDoc.metadata.KinesisCostradamus.consumptions.Latency = {
          "val": latency,
          "type": "MS"
        };
        let res = collectKinesisUsage(kinesisDoc);
        let metadata = res.metadata.KinesisCostradamus;
        document.consumptions = metadata.consumptions;
        document.cost = res.cost;
      });
    }
  }

  // return the document that has been augmented with usage consumption and cost data
  return document;
}

module.exports = collect;
