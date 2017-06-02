'use strict';

const finder = require('./finder.js');
const cost = require('../pricing/dynamodb.js');

let collectUsage = (dynamoUsageSubSeg) => {
  let consumptions = dynamoUsageSubSeg.metadata.DynamoDBCostradamus.consumptions;
  if (consumptions) {
    dynamoUsageSubSeg.cost = cost(consumptions);
    return dynamoUsageSubSeg;
  } else {
    console.error(`Expected to find a metadata.DynamoDBCostradamus.consumptions property for the subsegment. Skip processing DynamoDB usage for subsegment ${dynamoUsageSubSeg}.`);
  }
}

module.exports = collectUsage;
