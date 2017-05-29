'use strict';

const AWS = require('aws-sdk');
const XRay = new AWS.XRay({
  region: 'us-east-1'
});
const usageCollector = require('./usage-collector.js');

const params = {
  TraceIds: [
    '1-592c2234-875d9fe2a6ec523b563403f4'
  ]
};

XRay.batchGetTraces(params, (err, data) => {
  if (err) console.log(err, err.stack); // an error occurred
  else {
    let segments = data.Traces[0].Segments;
    segments.forEach(segment => {
      let document = JSON.parse(segment.Document);
      //console.log(document);
      usageCollector(document).then(res => {
        console.log('Collected usage data.', res);
        if (Object.keys(res).length > 0) {
          //console.log(res);
          console.log('RESULT', res);
          //console.log('INVOCATIONS', res.invocations);
          //console.log('CONSUMPTIONS', res.invocations.forEach(i => {
          //  if (i.consumptions) {
          //    console.log(i.consumptions)
          //  }
          //}));
        }
      }).catch(err => console.log(err));
    });
  }
});

//module.exports = class XRayClient {
//  constructor() {}
//
//}
