'use strict';

const AWS = require('aws-sdk');
const XRay = new AWS.XRay({
  region: 'us-east-1'
});
const collect = require('./collector/collect.js');
const util = require('util');

const params = {
  TraceIds: [
    '1-592d3b49-bf8ac7498a9738de2ce8291d'
  ]
};

XRay.batchGetTraces(params, (err, data) => {
  //console.log(util.inspect(data, false, null));
  let promises = [];
  if (err) console.log(err, err.stack); // an error occurred
  else {
    let segments = data.Traces[0].Segments;
    segments.forEach(segment => {
      let document = JSON.parse(segment.Document);
      let promise = collect(document);
      promises.push(promise);
      //if (document.subsegments) {
      //  document.subsegments.forEach(subsegment => {
      //    //if (subsegment.Document) {
      //    //console.log("Found a subsegment");
      //    let promise = collect(subsegment);
      //    promises.push(promise);
      //    //}
      //  });
      //}
      //console.log(document);

      //collect(document).then(res => {
      //  console.log('Collected usage data.', res);
      //  results.push(res);
      //}).catch(err => console.log(err));
    });
  }

  Promise.all(promises).then(res => {
    // TODO hardcoded
    let costTrace = {
      "traceId": params.TraceIds[0],
      "origin": "TODO"
    };
    let invocations = cleanArray(res);
    costTrace.invocations = invocations;
    console.log(util.inspect(costTrace, false, null))
  }).catch(err => console.log(err));
});

function cleanArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i] || Object.keys(arr[i]).length === 0) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

//module.exports = class XRayClient {
//  constructor() {}
//
//}
