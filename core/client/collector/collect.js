'use strict';

const finder = require('./finder.js');
const collectLambdaUsage = require('./collect-lambda-usage.js');
const collectDynamodbUsage = require('./collect-dynamodb-usage.js');

//let promiseThenHelper = (res, resolve, reject) => {
//  //console.log('Collected usage data.', res);
//  if (Object.keys(res).length > 0) {
//    resolve(res);
//  } else {
//    reject("Wut?");
//  }
//};

//function collect(document) {
//  //return new Promise((resolve, reject) => {
//  //  resolve(augment(document));
//  //});
//  let promise = augment(document);
//  return promise;
//};

async function collect(document) {
  let lambdaDoc = finder.lambdaUsageFinder(document);
  if (lambdaDoc) {
    console.log("Found Lambda document", document.id);
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
    console.log("Found dynamodb document");
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
    console.log("Found kinesis");
  }

  // return the document that has been augmented with usage consumption and cost data
  return document;
}

module.exports = collect;
