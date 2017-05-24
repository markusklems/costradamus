'use strict';

const finder = require('./finder.js');
const cwlogs = require('cwlogs');

let usageCollector = (document) => {
  let toReturn = {};

  if (finder.lambdaUsageFinder(document)) {
    let lambdaUsage = document;
    //{
    //  start_time: document.start_time,
    //  end_time: document.end_time,
    //  duration: (document.end_time - document.start_time)
    //};
    toReturn.LambdaUsage = lambdaUsage;
  }

  if (document.subsegments) {
    // DynamoDB usage collection
    let dynamoUsageSubSeg = document.subsegments.find(finder.dynamoUsageFinder);
    //console.log(dynamoCapacitySubSeg);
    if (dynamoUsageSubSeg) {
      let ddbUsage = dynamoUsageSubSeg.metadata.ResourceUsage;
      toReturn.DynamoDBConsumedCapacity = ddbUsage.DynamoDBConsumedCapacity;
    }

    // Lambda usage collection
    //let lambdaUsageSubSeg = //document.subsegments.find(finder.lambdaUsageFinder);
    ////console.log(dynamoCapacitySubSeg);
    //if (lambdaUsageSubSeg) {
    //  let lambdaUsage = lambdaUsageSubSeg;
    //  toReturn.LambdaUsage = lambdaUsage;
    //}
  }
  return toReturn;
}

module.exports = usageCollector;
