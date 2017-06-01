'use strict';

const getXRayTraces = require('./xray-client.js').getXRayTraces;
const util = require('util');

const traces = [
  '1-592ec12d-5e40def01a28cfb2caeeb872'
];

analyze(traces).then(res => {
  console.log(util.inspect(res, false, null));
});

aggregateCost('1-592ec12d-5e40def01a28cfb2caeeb872').then(res => {
  console.log(util.inspect(res, false, null));
});

async function analyze(traceIds) {
  let result = await getXRayTraces(traceIds);
  return result;
}

async function aggregateCost(traceId) {
  let costTrace = await getXRayTraces([traceId]);
  return aggregate(costTrace);

  function aggregate(costTrace) {
    let arrayOfCostObjects = [];
    costTrace.segments.forEach(segment => {
      _aggregate(segment);
    });

    //console.log("array of cost objects:", toReturn);
    let sum = 0;
    arrayOfCostObjects.forEach(costObj => {
      if (costObj.MonetaryCost && costObj.MonetaryCost.val) {
        console.log("val: ", costObj.MonetaryCost.val);
        sum += costObj.MonetaryCost.val;
      }
    });
    return sum;

    function _aggregate(segment) {
      if (segment.cost) {
        arrayOfCostObjects.push(segment.cost);
      }

      if (segment.subsegments) {
        segment.subsegments.forEach(subsegment => {
          // TODO process subsegment
          if (subsegment.cost) {
            arrayOfCostObjects.push(subsegment.cost);
          }
          _aggregate(subsegment);
        });
      }
    }
  }
}
