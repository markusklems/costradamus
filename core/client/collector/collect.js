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
  document.costs = [];
  return new Promise((resolve, reject) => {
    let lambdaDoc = finder.lambdaUsageFinder(document);
    if (lambdaDoc) {
      console.log("Found Lambda document");
      collectLambdaUsage(document).then(res => {
        // TODO
        document.costs.push(res);
        let dynamoDoc = finder.dynamoUsageFinder(document);
        if (dynamoDoc) {
          console.log("Found dynamodb document!!!");
          let dynamoUsage = dynamoDoc.subsegments.find(finder.dynamoMetadataFinder);
          collectDynamodbUsage(dynamoUsage).then(res => {
            // TODO
            document.costs.push(res);
            resolve(document);
          }).catch(err => reject(err));
        } else {
          resolve(document);
        }
      }).catch(err => reject(err));
    } else {
      resolve({});
    }
  });
};

module.exports = collect;
