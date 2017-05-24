'use strict';

const finder = require('./finder.js');
const cwlogs = require('cwlogs');

let usageCollector = (document) => {
  let promises = [];

  if (finder.lambdaUsageFinder(document)) {
    let lambdaUsage = document;
    let parseCloudWatchLogs = require('./cw.js');
    let p = new Promise((resolve, reject) => {
      // TODO hardcoded values, get from document => transform to Unix epoch in ms
      parseCloudWatchLogs('persistValueFunction', 1495549204000, 1495549207999).then(res => {
        resolve({
          name: 'LambdaUsage',
          value: res
        });
      }).catch(err => reject(err));
    });
    promises.push(p);
  }

  if (document.subsegments) {
    // DynamoDB usage collection
    let dynamoUsageSubSeg = document.subsegments.find(finder.dynamoUsageFinder);
    //console.log(dynamoUsageSubSeg);
    if (dynamoUsageSubSeg) {
      let ddbUsage = dynamoUsageSubSeg.metadata.ResourceUsage;
      let p = new Promise((resolve, reject) => {
        resolve({
          name: 'DynamoDBConsumedCapacity',
          value: ddbUsage.DynamoDBConsumedCapacity
        });
      });
      promises.push(p);
    }

    // Lambda usage collection
    //let lambdaUsageSubSeg = //document.subsegments.find(finder.lambdaUsageFinder);
    ////console.log(dynamoCapacitySubSeg);
    //if (lambdaUsageSubSeg) {
    //  let lambdaUsage = lambdaUsageSubSeg;
    //  toReturn.LambdaUsage = lambdaUsage;
    //}
  }
  return new Promise((resolve, reject) => {
    Promise.all(promises).then(res => {
      let toReturn = {};
      if (res && res.length > 0) {
        toReturn[res[0].name] = res[0].value;
      }
      resolve(toReturn);
    }).catch(err => reject(err));
  });
}

module.exports = usageCollector;
