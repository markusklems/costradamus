'use strict';

const fs = require('fs');
const util = require('util');

function writeToJsonFile(traceId, path) {

}

function readFromJsonFile(path) {
  return JSON.parse(fs.readFileSync(path));
}

//writeToJsonFile('1-59301069-2ff295fcdc556b9dbee93a9a', './foo.json');

module.exports = {
  "readFromJsonFile": readFromJsonFile,
  "writeToJsonFile": writeToJsonFile
};
