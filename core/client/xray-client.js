'use strict';

const AWS = require('aws-sdk');
const XRay = new AWS.XRay({
  region: 'us-east-1'
});
const usageCollector = require('./usage-collector.js');

const params = {
  TraceIds: [
    '1-5925a43e-7163ba58157e53826d3c9730'
  ]
};

XRay.batchGetTraces(params, (err, data) => {
  if (err) console.log(err, err.stack); // an error occurred
  else {
    let segments = data.Traces[0].Segments;
    segments.forEach(segment => {
      let document = JSON.parse(segment.Document);
      //console.log(document);
      usageCollector(document).then(resourceUsage => console.log('Resource Usage', resourceUsage)).catch(err => console.log(err));
    });
  }
});

//module.exports = class XRayClient {
//  constructor() {}
//
//}
