'use strict';

const finder = require('./finder.js');
const cost = require('../pricing/kinesis.js');

let collectUsage = (kinesisUsageSubSeg) => {
  let consumptions = kinesisUsageSubSeg.metadata.KinesisCostradamus.consumptions;
  if (consumptions) {
    kinesisUsageSubSeg.cost = cost(consumptions);
    return kinesisUsageSubSeg;
  } else {
    console.error(`Expected to find a metadata.KinesisCostradamus.consumptions property for the subsegment. Skip processing Kinesis usage for subsegment ${kinesisUsageSubSeg}.`);
  }
}

module.exports = collectUsage;
