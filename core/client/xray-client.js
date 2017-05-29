'use strict';

const AWS = require('aws-sdk');
const XRay = new AWS.XRay({
  region: 'us-east-1'
});
const collect = require('./collector/collect.js');

const params = {
  TraceIds: [
    '1-592c2234-875d9fe2a6ec523b563403f4'
  ]
};

XRay.batchGetTraces(params, (err, data) => {
  let promises = [];
  if (err) console.log(err, err.stack); // an error occurred
  else {
    let segments = data.Traces[0].Segments;
    segments.forEach(segment => {
      let document = JSON.parse(segment.Document);
      let promise = collect(document);
      //promises.push(promise);
      //console.log(document);

      //collect(document).then(res => {
      //  console.log('Collected usage data.', res);
      //  results.push(res);
      //}).catch(err => console.log(err));
    });
  }
  Promise.all(promises).then(res => console.log(res)).catch(err => console.log(err));
});

//module.exports = class XRayClient {
//  constructor() {}
//
//}
