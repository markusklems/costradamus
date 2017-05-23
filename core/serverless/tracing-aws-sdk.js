'use strict';
const path = require('path');

let setup = AWSXRAY => {
  AWSXRAY.middleware.setSamplingRules(path.join(__dirname, 'config', 'sampling-rules.json'));
}

module.exports = setup;
