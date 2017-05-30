'use strict';

const finder = require('./finder.js');
const collectLambdaUsage = require('./collect-lambda-usage.js');
const collectDynamodbUsage = require('./collect-dynamodb-usage.js');

let promiseThenHelper = (res, resolve, reject) => {
  //console.log('Collected usage data.', res);
  if (Object.keys(res).length > 0) {
    resolve(res);
  } else {
    reject("Wut?");
  }
};

let collect = document => {
  return new Promise((resolve, reject) => {
    let promises = [];
    makeCostDocument(document).then(costDoc => {
      //console.log("costDoc", costDoc);
      costDoc.subsegments = [];
      //if (document.subsegments) {
      //  document.subsegments.forEach(subsegment => {
      //    let p = collect(subsegment);
      //    promises.push(p);
      //  });
      //}

      Promise.all(promises).then(res => {
        costDoc.subsegments.push(res);
        resolve(costDoc);
      }).catch(err => reject(err));
    }).catch(err => reject(err));
  });
};

async function makeCostDocument(document) {
  //let costDocument = {};

  let lambdaDoc = finder.lambdaUsageFinder(document);
  if (lambdaDoc) {
    console.log("Found Lambda document", document.id);
    let res = {};
    try {
      res = await collectLambdaUsage(document);
      console.log("lambda res", document.id);
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

  // Last but not least, return the Promise
  return new Promise((resolve, reject) => {
    resolve(document);
  });
}

module.exports = collect;
