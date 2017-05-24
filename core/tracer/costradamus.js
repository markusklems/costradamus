'use strict';
const fs = require('fs');
const path = require('path');
const DynamoTracer = require('./dynamo-tracer.js');
const LambdaTracer = require('./lambda-tracer.js');

module.exports = class Costradamus {
  constructor() {
    this._tracing = false;
  }

  init(shouldThisBeTraced) {
    let togglesBuffer = fs.readFileSync(path.join(__dirname, 'config', 'toggles.json'));
    let toggles = JSON.parse(togglesBuffer.toString());
    if (toggles.tracing && toggles.tracing.find(i => i === shouldThisBeTraced)) {
      console.log("Tracing with Costradamus has been enabled.");
      this._tracing = true;
    }
  }

  getXRay() {
    if (this._tracing) {
      console.log("getXRay() this._tracing", this._tracing);
      console.log("getXRay() this.AWSXRAY", this.AWSXRAY);
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

  getLambdaTracer() {
    if (this._tracing) {
      let segment = this.getXRay().getSegment();
      return new LambdaTracer(segment);
    } else {
      return null;
    }
  }

  getDynamoTracer() {
    if (this._tracing) {
      let segment = this.getXRay().getSegment();
      return new DynamoTracer(segment);
    } else {
      return null;
    }
  }
}
