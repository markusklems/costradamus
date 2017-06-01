'use strict';

const AWS = require('aws-sdk');
const XRay = new AWS.XRay({
  region: 'us-east-1'
});
const collect = require('./collector/collect.js');
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

async function getXRayTraces(traceIds) {
  const params = {
    TraceIds: traceIds
  };

  let data = null;
  try {
    data = await batchGetTracesPromise(params);
    let segments = data.Traces[0].Segments;
    let promises = [];
    //let processedSegments = [];
    segments.forEach(segment => {
      let document = JSON.parse(segment.Document);
      try {
        //if (!processedSegments.find(seg => seg.id === document.id)) {
        let p = collect(document);
        //processedSegments.push(document.id);
        promises.push(p);
        //console.log("document.id " + document.id);
      } catch (err) {
        console.error(err);
      }
    });

    let allAugmentedDocuments = await Promise.all(promises);
    //console.log(util.inspect(allAugmentedDocuments, false, null));

    let costTrace = {
      "traceId": params.TraceIds[0],
      "origin": ""
    };
    costTrace.segments = [].concat.apply([], allAugmentedDocuments);
    return costTrace;
  } catch (err) {
    console.log(err, err.stack);
  }
}


//function cleanArray(arr) {
//  for (let i = 0; i < arr.length; i++) {
//    if (!arr[i] || Object.keys(arr[i]).length === 0) {
//      arr.splice(i, 1);
//      i--;
//    }
//  }
//  return arr;
//}

module.exports = {
  "getXRayTraces": getXRayTraces
};
