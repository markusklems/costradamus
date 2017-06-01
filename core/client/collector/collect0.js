'use strict';

const finder = require('./finder.js');
const collectLambdaUsage = require('./collect-lambda-usage.js');
const collectDynamodbUsage = require('./collect-dynamodb-usage.js');
const collectKinesisUsage = require('./collect-kinesis-usage.js');

function collect(document) {
  let promise = traverse(document);
  return promise;
};

async function traverse(document) {
  let promises = [];
  _traverse(document);
  let toReturn = await Promise.all(promises);
  //console.log("toReturn", toReturn);
  return toReturn;

  function _traverse(segment) {
    //console.log("augmenting " + segment.id);
    let p = augment(segment);
    //promises.push(p);

    if (segment.subsegments) {
      segment.subsegments.forEach(subsegment => {
        _traverse(subsegment);
      });
    } else {
      promises.push(p);
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
    //console.log("dynamoDocs", dynamoDocs);
    if (dynamoUsageDocs && dynamoUsageDocs.length > 0) {
      dynamoUsageDocs.forEach(dynamoDoc => {
        //console.log("Found dynamodb document", dynamoDoc.id);
        //let dynamoUsage = dynamoDoc.subsegments.find(finder.dynamoMetadataFinder);
        dynamoDoc.metadata.DynamoDBCostradamus.consumptions.Latency = {
          "val": (document.end_time - document.start_time),
          "type": "MS"
        };
        let res = {};
        try {
          res = collectDynamodbUsage(dynamoDoc);
          let metadata = res.metadata.DynamoDBCostradamus;
          //dynamoDoc.resourceName = metadata.resourceName;
          document.consumptions = metadata.consumptions;
          document.cost = res.cost;
        } catch (err) {
          console.error(err);
        }
      });
    }

    // Find Kinesis usage segments
    let kinesisUsageDocs = finder.kinesisUsageFilter(document);
    //console.log("dynamoDocs", dynamoDocs);
    if (kinesisUsageDocs && kinesisUsageDocs.length > 0) {
      kinesisUsageDocs.forEach(kinesisDoc => {
        //console.log("Found kinesis document", kinesisDoc.id);
        //let kinesisUsage = kinesisDoc.subsegments.find(finder.kinesisMetadataFinder);
        //if (kinesisUsage) {
        //console.log("Found kinesis costradamus subsegment");
        kinesisDoc.metadata.KinesisCostradamus.consumptions.Latency = {
          "val": (document.end_time - document.start_time),
          "type": "MS"
        };
        let res = {};
        try {
          res = collectKinesisUsage(kinesisDoc);
          let metadata = res.metadata.KinesisCostradamus;
          document.consumptions = metadata.consumptions;
          document.cost = res.cost;
        } catch (err) {
          console.error(err);
        }
        //}
      });
    }
  }

  // return the document that has been augmented with usage consumption and cost data
  return document;
}

module.exports = collect;
