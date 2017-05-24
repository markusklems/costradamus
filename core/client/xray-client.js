'use strict';

const AWS = require('aws-sdk');
const XRay = new AWS.XRay({
  region: 'us-east-1'
});
const usageCollector = require('./usage-collector.js');

const params = {
  TraceIds: [
    '1-59244514-05996dd9e36837dd31478567'
  ]
};

XRay.batchGetTraces(params, (err, data) => {
  if (err) console.log(err, err.stack); // an error occurred
  else {
    let segments = data.Traces[0].Segments;
    segments.forEach(segment => {
      let document = JSON.parse(segment.Document);
      //console.log(document);
      let resourceUsage = usageCollector(document);
      console.log(resourceUsage);
    });
  }
});

//module.exports = class XRayClient {
//  constructor() {}
//
//}
