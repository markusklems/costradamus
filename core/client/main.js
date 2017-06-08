'use strict';

const getXRayTraces = require('./collector/xray-client.js').getXRayTraces;
const collect = require('./collector/collect.js');
const prune = require('./prune.js');
const fs = require('fs');
const readFromJsonFile = require('./io/file-operations.js').readFromJsonFile;
const util = require('util');
const path = require('path');

async function main(_traceId, outputDir) {
  let traceId = _traceId;
  const output_path = `${outputDir}`;
  const path1 = path.join(output_path, `${traceId}.json`);
  const path2 = path.join(output_path, `${traceId}-augmented.json`);
  const path3 = path.join(output_path, `${traceId}-pruned.json`);
  try {
    let traceData = await getXRayTraces(traceId);
    fs.writeFileSync(path1, JSON.stringify(traceData, null, 2));
    //console.log(util.inspect(xrayTrace, false, null));

    // Construct the augmented X-Ray trace.
    let augmentedTraceData = await collect(traceData.Traces[0]);
    fs.writeFileSync(path2, JSON.stringify(augmentedTraceData, null, 2));

    // Prune the augmented X-Ray trace object.
    let prunedTraceData = await prune(augmentedTraceData);
    //console.log(util.inspect(prunedTraceData, false, null));
    fs.writeFileSync(path3, JSON.stringify(prunedTraceData, null, 2));
  } catch (err) {
    console.error(err);
  }
}

module.exports = main;

// Start
//main().then(res => console.log("Done.")).catch(err => console.error(err));
