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

let makeCostDocument = (document) => {
  let costDocument = {};

  let lambdaDoc = finder.lambdaUsageFinder(document);
  if (lambdaDoc) {
    console.log("Found Lambda document");

    collectLambdaUsage(document).then(res => {
      // TODO work in progress
      //console.log("lambda res", res);
      costDocument.id = document.id;
      costDocument.parent_id = document.parent_id;
      costDocument.resourceName = res.resourceName;
      costDocument.resourceId = res.resourceId;
      costDocument.consumptions = res.consumptions;
      costDocument.cost = res.cost;
      pres(true);
    }).catch(err => reject(err));

  }
  let dynamoDoc = finder.dynamoUsageFinder(document);
  if (dynamoDoc) {
    console.log("Found dynamodb document");

    let dynamoUsage = dynamoDoc.subsegments.find(finder.dynamoMetadataFinder);
    dynamoUsage.metadata.DynamoDBConsumedCapacity.consumptions.Latency = dynamoDoc.end_time - dynamoDoc.start_time;
    collectDynamodbUsage(dynamoUsage).then(res => {
      // TODO work in progress
      //console.log("res", res);
      let metadata = res.metadata.DynamoDBConsumedCapacity;
      let subsegment = {};
      subsegment.id = dynamoDoc.id;
      subsegment.name = dynamoDoc.name;
      subsegment.resourceName = metadata.resourceName;
      subsegment.consumptions = metadata.consumptions;
      subsegment.cost = res.cost;
      costDocument.subsegment = subsegment;

    }).catch(err => reject(err));

  }
  //console.log("document", document);
  let kinesisDoc = finder.kinesisUsageFinder(document);
  if (kinesisDoc) {
    console.log("Found kinesis");
  }

  // Last but not least, resolve the Promise
  Promise.all(promises).then(res => {
    resolve(costDocument);
  }).catch(err => console.error(err));

}

module.exports = collect;
