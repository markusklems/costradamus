'use strict';

const finder = require('./finder.js');
const collectLambdaUsage = require('./collect-lambda-usage.js');
const collectDynamodbUsage = require('./collect-dynamodb-usage.js');

function collect(document) {
  let promise = traverse(document);
  return promise;
};

async function traverse(document) {
  let promises = [];
  _traverse(document);
  let toReturn = await Promise.all(promises);
  return toReturn;

  function _traverse(segment) {
    let p = augment(segment);
    promises.push(p);

    if (segment.subsegments) {
      segment.subsegments.forEach(subsegment => {
        //console.log("SUBSEG", subsegment);
        let p = augment(subsegment);
        promises.push(p);
        _traverse(subsegment);
      });
    }
  }
}

async function augment(document) {
  let lambdaDoc = finder.lambdaUsageFinder(document);
  if (lambdaDoc) {
    //console.log("Found Lambda document", document.id);
    try {
      let res = await collectLambdaUsage(document);
      document.resourceName = res.resourceName;
      document.resourceId = res.resourceId;
      document.consumptions = res.consumptions;
      document.cost = res.cost;
    } catch (err) {
      console.error(err);
    }
  }
  let dynamoDoc = finder.dynamoUsageFinder(document);
  if (dynamoDoc) {
    //console.log("Found dynamodb document");
    let dynamoUsage = dynamoDoc.subsegments.find(finder.dynamoMetadataFinder);
    dynamoUsage.metadata.DynamoDBConsumedCapacity.consumptions.Latency = dynamoDoc.end_time - dynamoDoc.start_time;
    let res = {};
    try {
      res = collectDynamodbUsage(dynamoUsage);
      // TODO work in progress
      //console.log("res", res);
      let metadata = res.metadata.DynamoDBConsumedCapacity;
      dynamoDoc.resourceName = metadata.resourceName;
      dynamoDoc.consumptions = metadata.consumptions;
      dynamoDoc.cost = res.cost;
    } catch (err) {
      console.error(err);
    }
  }
  //console.log("document", document);
  let kinesisDoc = finder.kinesisUsageFinder(document);
  if (kinesisDoc) {
    //console.log("Found kinesis");
  }

  // return the document that has been augmented with usage consumption and cost data
  return document;
}

module.exports = collect;
