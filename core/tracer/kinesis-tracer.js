'use strict';

const AWS = require('aws-sdk');

module.exports = class KinesisTracer {

  addSubsegment(parent, operation, params) {
    console.log("Add Kinesis Subsegment with operation type and payload size.");
    let subsegment = parent.addNewSubsegment("KinesisMetadata");
    subsegment.addMetadata("Operation", operation, "ResourceUsage");
    // Data is base64-encoded when the Data blob is serialized
    // Calculate payload size in bytes.
    let payloadSize = Math.ceil(AWS.util.base64.encode(params.Data).length * 8 / 6);
    //console.log("payloadSize", payloadSize);
    subsegment.addMetadata("MessagePayloadSize", payloadSize, "ResourceUsage");
    subsegment.close();
  }
}
