'use strict';
const fs = require('fs');
const path = require('path');
const DynamoTracer = require('./dynamo-tracer.js');
const LambdaTracer = require('./lambda-tracer.js');
const KinesisTracer = require('./kinesis-tracer.js');

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

  getDynamoTracer() {
    if (this._tracing) {
      return new DynamoTracer();
    } else {
      return null;
    }
  }

  getLambdaTracer() {
    if (this._tracing) {
      return new LambdaTracer();
    } else {
      return null;
    }
  }

  getKinesisTracer() {
    if (this._tracing) {
      return new KinesisTracer();
    } else {
      return null;
    }
  }
}
