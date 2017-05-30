'use strict';

const finder = require('./finder.js');
const cwlogs = require('cwlogs');
const cost = require('../pricing/dynamodb.js');

let collectUsage = (dynamoUsageSubSeg) => {
  return new Promise((resolve, reject) => {
    let consumptions = dynamoUsageSubSeg.metadata.DynamoDBConsumedCapacity.consumptions;
    if (consumptions) {
      // TODO hardcoded values
      consumptions.PayloadSize = {
        val: 1.5,
        type: 'KB'
      };
      //c.CapacityUnits = {
      //  val: 2,
      //  type: 'WCU'
      //};
      //c.Latency = {
      //  val: 800,
      //  type: 'MS'
      //};
      //console.log("consumptions", consumptions);
      dynamoUsageSubSeg.cost = cost(consumptions);
      resolve(dynamoUsageSubSeg);
    } else {
      reject(`Expected to find a metadata.consumptions property for the subsegment. Skip processing DynamoDB usage for subsegment ${dynamoUsageSubSeg}.`);
    }
  });
}

module.exports = collectUsage;
