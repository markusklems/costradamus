'use strict';

const AWS = require('aws-sdk');
const XRay = new AWS.XRay({
  region: 'us-east-1'
});
const usageCollector = require('./usage-collector.js');

const params = {
  TraceIds: [
    '1-59259938-34e8d4f893d074c8b6f04e49',
    '1-59259969-e6b42520637bb59c919c2e4f'
  ]
};

XRay.batchGetTraces(params, (err, data) => {
  if (err) console.log(err, err.stack); // an error occurred
  else {
    let segments = data.Traces[0].Segments;
    segments.forEach(segment => {
      let document = JSON.parse(segment.Document);
      //console.log(document);
      usageCollector(document).then(resourceUsage => console.log('', resourceUsage)).catch(err => console.log(err));
    });
  }
});

//module.exports = class XRayClient {
//  constructor() {}
//
//}
