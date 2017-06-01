'use strict';

const AWS = require('aws-sdk');
const XRay = new AWS.XRay({
  region: 'us-east-1'
});
const collect = require('./collector/collect.js');
const fs = require('fs');
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
  const params = {
    TraceIds: [traceId]
  };

  const path = traceId + '.json';

  batchGetTracesPromise(params).then(data => {
    // Jsonify the X-Ray trace
    let segments = data.Traces[0].Segments;
    segments.forEach(segment => {
      let document = JSON.parse(segment.Document);
      segment.Document = document;
    });
    // Save X-Ray trace in json file for further processing
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  }).catch(err => console.log(err));

}

//getXRayTraces('1-59301069-2ff295fcdc556b9dbee93a9a');

module.exports = {
  "getXRayTraces": getXRayTraces
};
