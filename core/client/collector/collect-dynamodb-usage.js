'use strict';

const finder = require('./finder.js');
const cwlogs = require('cwlogs');
const cost = require('../pricing/dynamodb.js');

let collectUsage = (dynamoUsageSubSeg) => {
  return new Promise((resolve, reject) => {
    let ddbUsage = dynamoUsageSubSeg.metadata.ResourceUsage;
    if (ddbUsage) {
      // ddbUsage.DynamoDBConsumedCapacity
      let c = {};
      // TODO
      c.PayloadSize = {
        val: 1.5,
        type: 'KB'
      };
      c.CapacityUnits = {
        val: 2,
        type: 'WCU'
      };
      c.Latency = {
        val: 800,
        type: 'MS'
      };
      dynamoUsageSubSeg.cost = cost(c);
      resolve(dynamoUsageSubSeg);
    } else {
      reject(`Expected to find a metadata.ResourceUsage property for the subsegment. Skip processing DynamoDB usage for subsegment ${dynamoUsageSubSeg}.`);
    }
  });
}

module.exports = collectUsage;
