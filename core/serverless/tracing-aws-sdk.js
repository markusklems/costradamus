'use strict';
const path = require('path');

let _getXray = _tracing => {
  if (_tracing) {
    const AWSXRAY = require('aws-xray-sdk-core');
    AWSXRAY.middleware.setSamplingRules(path.join(__dirname, 'sampling-rules.json'));
    return AWSXRAY;
  } else {
    return null;
  }
}

let getAWS = _tracing => {
  if (_tracing) {
    return _getXray(_tracing).captureAWS(require('aws-sdk'));
  } else {
    return require('aws-sdk');
  }
}

let setup = AWSXRAY => {
  AWSXRAY.middleware.setSamplingRules(path.join(__dirname, 'config', 'sampling-rules.json'));
}

module.exports = setup;
