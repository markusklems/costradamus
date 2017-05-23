'use strict';
const path = require('path');

module.exports = class Costradamus {
  constructor() {
    this._tracing = true;
  }

  getXRay() {
    if (this._tracing) {
      if (!this.AWSXRAY) {
        this.AWSXRAY = require('aws-xray-sdk-core');
        this.AWSXRAY.middleware.setSamplingRules(path.join(__dirname, 'config', 'sampling-rules.json'));
      }
      return this.AWSXRAY;
    } else {
      return null;
    }
  }

  getAWS() {
    if (this._tracing) {
      return this.getXRay().captureAWS(require('aws-sdk'));
    } else {
      return require('aws-sdk');
    }
  }

}
