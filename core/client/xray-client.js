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

async function main() {
  const params = {
    TraceIds: [
      '1-592d3b49-bf8ac7498a9738de2ce8291d'
    ]
  };

  let data = null;
  try {
    data = await batchGetTracesPromise(params);
    let segments = data.Traces[0].Segments;
    let promises = [];
    segments.forEach(segment => {
      let document = JSON.parse(segment.Document);
      try {
        let p = collect(document);
        promises.push(p);
      } catch (err) {
        console.error(err);
      }
    });

    let allAugmentedDocuments = await Promise.all(promises);

    let costTrace = {
      "traceId": params.TraceIds[0],
      "origin": "TODO"
    };
    //let invocations = cleanArray(allAugmentedDocuments);
    costTrace.invocations = allAugmentedDocuments;
    return costTrace;
  } catch (err) {
    console.log(err, err.stack);
  }
}


function cleanArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i] || Object.keys(arr[i]).length === 0) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

main().then(costTrace => console.log(util.inspect(costTrace, false, null)));

//module.exports = class XRayClient {
//  constructor() {}
//
//}
