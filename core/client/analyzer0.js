'use strict';

const CXRay = require('./xray-client.js');
const util = require('util');

const traces = [
  '1-592ec12d-5e40def01a28cfb2caeeb872'
];

//analyze(traces).then(res => {
//  console.log(util.inspect(res, false, null));
//});

showCostTrace('1-592ec12d-5e40def01a28cfb2caeeb872').then(res => {
  console.log(util.inspect(res, false, null));
});

async function analyze(traceIds) {
  let result = await CXRay(traceIds);
  return result;
}

async function showCostTrace(traceId) {
  let costTrace = await CXRay([traceId]);
  return traverse(costTrace);

  function traverse(costTrace) {
    let toReturn = {};
    costTrace.segments.forEach(segment => {
      //_traverse(segment)
      _traverse(toReturn, segment);
    });

    //console.log("returning:", toReturn);
    return toReturn;

    function _traverse(copy, segment) {
      //console.log("traverse");

      // TODO process segment
      if (segment.cost) {
        Object.assign(copy, segment);
        //console.log("traverse", toReturn);
      }

      if (segment.subsegments) {
        copy.subsegments = [];
        segment.subsegments.forEach(subsegment => {
          // TODO process subsegment
          let subsegCopy = {};
          if (subsegment.cost) {
            Object.assign(subsegCopy, subsegment);
          } else {
            subsegCopy = {
              "id": subsegment.id
            };
          }
          copy.subsegments.push(subsegCopy);
          _traverse(subsegCopy, subsegment);
        });
      }
    }
  }
}
