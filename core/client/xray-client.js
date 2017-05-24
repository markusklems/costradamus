'use strict';

const AWS = require('aws-sdk');
const XRay = new AWS.XRay({
  region: 'us-east-1'
});
const usageCollector = require('./usage-collector.js');

const params = {
  TraceIds: [
    '1-5925b130-21dd571f2574a9287589f79a'
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
        console.log('RESULT', res);
        console.log('Invocations', res.invocations);
        console.log('Consumptions', res.invocations.forEach(i => {
          if (i.consumptions) {
            console.log(i.consumptions)
          }
        }));
      }).catch(err => console.log(err));
    });
  }
});

//module.exports = class XRayClient {
//  constructor() {}
//
//}
