'use strict';

const AWS = require('aws-sdk');
const XRay = new AWS.XRay({
  region: 'us-east-1'
});
const util = require('util');

function batchGetTracesPromise(params) {
  return new Promise((resolve, reject) => {
    XRay.batchGetTraces(params, (err, data) => {
      //console.log(util.inspect(data, false, null));
      if (err) {
        reject(err);
      } else {
        resolve(data)
      };
    });
  });
}

function getXRayTraces(traceId) {
  return new Promise((resolve, reject) => {
    const params = {
      TraceIds: [traceId]
    };

    batchGetTracesPromise(params).then(data => {
      // Jsonify the X-Ray trace
      let segments = data.Traces[0].Segments;
      segments.forEach(segment => {
        let document = JSON.parse(segment.Document);
        segment.Document = document;
      });
      resolve(data);
    }).catch(err => reject(err));
  });
}

module.exports = {
  "getXRayTraces": getXRayTraces
};
