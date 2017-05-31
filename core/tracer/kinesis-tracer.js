'use strict';

const AWS = require('aws-sdk');

module.exports = class KinesisTracer {

  addSubsegment(parent, operation, params) {
    console.log("Add Kinesis Subsegment with operation type and payload size.");
    let subsegment = parent.addNewSubsegment("KinesisMetadata");
    let consumptions = {};
    // Data is base64-encoded when the Data blob is serialized
    // Calculate payload size in bytes.
    let payloadSizeInByte = Math.ceil(AWS.util.base64.encode(params.Data).length * 8 / 6);
    let payloadSize = {
      "val": payloadSizeInByte,
      "type": "B"
    }
    let kinesisOp = {
      "Operation": {
        "val": operation,
        "type": "KINESISOPERATION"
      }
    }
    consumptions.PayloadSize = payloadSize;
    consumptions.Operation = kinesisOp;
    subsegment.addMetadata("consumptions", consumptions, "KinesisMetadata");
    subsegment.close();
  }
}
