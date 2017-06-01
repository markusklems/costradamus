'use strict';

const getXRayTraces = require('./../xray-client.js').getXRayTraces;
const fs = require('fs');
const util = require('util');

function writeToJsonFile(traceId, path) {
  getXRayTraces([traceId]).then(xrayTrace => {
    fs.writeFileSync(path, JSON.stringify(xrayTrace, null, 2));
    //console.log(util.inspect(xrayTrace, false, null));
  }).catch(err => console.error(err));
}

function readFromJsonFile(path) {
  return JSON.parse(fs.readFileSync(path));
}

//writeToJsonFile('1-59301069-2ff295fcdc556b9dbee93a9a', './foo.json');

module.exports = {
  "readFromJsonFile": readFromJsonFile,
  "writeToJsonFile": writeToJsonFile
};
