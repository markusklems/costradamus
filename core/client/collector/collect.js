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
    let p1, p2;
    if (finder.lambdaUsageFinder(document)) {
      console.log("Found Lambda document");
      p1 = collectLambdaUsage(document);
      let foundDynamoDoc = finder.dynamoUsageFinder(document);
      if (foundDynamoDoc) {
        console.log("Found dynamodb document!!!");
        let foundDynamoUsage = foundDynamoDoc.subsegments.find(finder.dynamoMetadataFinder);
        console.log("foundDynamoUsage", foundDynamoUsage);
        p2 = collectDynamodbUsage(foundDynamoUsage); //.then(res => promiseThenHelper(res, resolve, reject)).catch(err => reject(err));
      }
      let promises = [];
      if (p1) promises.push(p1);
      if (p2) promises.push(p2);
      Promise.all(promises).then(res => resolve(res)).catch(err => reject(err));
      //.then(res => promiseThenHelper(res, resolve, reject)).catch(err => reject(err));
    } else if (false) {
      // TODO
    } else {
      resolve({});
    }
  });
};

module.exports = collect;
