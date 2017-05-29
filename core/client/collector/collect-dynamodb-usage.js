'use strict';

const finder = require('./finder.js');
const cwlogs = require('cwlogs');

let collectUsage = (dynamoUsageSubSeg) => {
  return new Promise((resolve, reject) => {
    let ddbUsage = dynamoUsageSubSeg.metadata.ResourceUsage;
    if (ddbUsage) {
      resolve(ddbUsage.Metadata);
    } else {
      reject(`Expected to find a metadata.ResourceUsage property for the subsegment. Skip processing DynamoDB usage for subsegment ${dynamoUsageSubSeg}.`);
    }
  });
}

module.exports = collectUsage;
