'use strict';

const AWS = require('aws-sdk');
const XRay = new AWS.XRay({
  region: 'us-east-1'
});
const collect = require('./collector/collect.js');

const params = {
  TraceIds: [
    '1-592d3b49-bf8ac7498a9738de2ce8291d'
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
      promises.push(promise);
      //console.log(document);

      //collect(document).then(res => {
      //  console.log('Collected usage data.', res);
      //  results.push(res);
      //}).catch(err => console.log(err));
    });
  }
  const util = require('util');
  Promise.all(promises).then(res => console.log(util.inspect(res, false, null))).catch(err => console.log(err));
});

//module.exports = class XRayClient {
//  constructor() {}
//
//}
