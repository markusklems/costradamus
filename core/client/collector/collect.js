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
  let costDocument = {};
  return new Promise((resolve, reject) => {
    let lambdaDoc = finder.lambdaUsageFinder(document);
    if (lambdaDoc) {
      console.log("Found Lambda document");
      collectLambdaUsage(document).then(res => {
        // TODO work in progress
        costDocument.id = document.id;
        costDocument.name = document.name;
        costDocument.parent_id = document.parent_id;
        costDocument.consumptions = res.consumptions;
        costDocument.cost = res.cost;
        let dynamoDoc = finder.dynamoUsageFinder(document);
        if (dynamoDoc) {
          console.log("Found dynamodb document");
          let dynamoUsage = dynamoDoc.subsegments.find(finder.dynamoMetadataFinder);
          collectDynamodbUsage(dynamoUsage).then(res => {
            // TODO work in progress
            let subsegment = {};
            subsegment.id = dynamoDoc.id;
            subsegment.name = dynamoDoc.name;
            subsegment.resource = res.metadata.ResourceUsage.DynamoDBConsumedCapacity.TableName;
            subsegment.consumptions = {
              "CapacityUnits": res.metadata.ResourceUsage.DynamoDBConsumedCapacity.CapacityUnits
            };
            subsegment.cost = res.cost;
            costDocument.subsegment = subsegment;
            resolve(costDocument);
          }).catch(err => reject(err));
        } else {
          resolve(costDocument);
        }
      }).catch(err => reject(err));
    } else {
      resolve({});
    }
  });
};

module.exports = collect;
