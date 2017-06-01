'use strict';

const getXRayTraces = require('./collector/xray-client.js').getXRayTraces;
const collect = require('./collector/collect.js');
const prune = require('./prune.js');
const fs = require('fs');
const readFromJsonFile = require('./io/file-operations.js').readFromJsonFile;
const util = require('util');

const traceId = '1-59301069-2ff295fcdc556b9dbee93a9a';
const path1 = `./data/${traceId}.json`;
const path2 = `./data/${traceId}-augmented.json`;
const path3 = `./data/${traceId}-pruned.json`;

async function main() {
  try {
    let traceData = await getXRayTraces(traceId);
    fs.writeFileSync(path1, JSON.stringify(traceData, null, 2));
    //console.log(util.inspect(xrayTrace, false, null));

    // Construct the augmented X-Ray trace.
    let augmentedTraceData = await collect(traceData.Traces[0]);
    fs.writeFileSync(path2, JSON.stringify(augmentedTraceData, null, 2));

    // Prune the augmented X-Ray trace object.
    let prunedTraceData = await prune(augmentedTraceData);
    console.log(util.inspect(prunedTraceData, false, null));
    fs.writeFileSync(path3, JSON.stringify(prunedTraceData, null, 2));
  } catch (err) {
    console.error(err);
  }
}

// Start
main().then(res => console.log("Done.")).catch(err => console.error(err));
