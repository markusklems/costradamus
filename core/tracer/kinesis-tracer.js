'use strict';

const AWS = require('aws-sdk');

module.exports = class KinesisTracer {

  addReadSubsegment(parent, records) {
    let payloadSizeInByte = 0;
    // Assumption of average utf8-base64 encoded record metadata size: 0 Bytes
    // (assumption made for faster computation and less performance overhead of tracing)
    const recordMetadataOverheadInBytes = 0;
    //console.log("records", records);
    records.forEach(r => {
      //console.log("r", r);
      let data = r.Data; // decoded buffer object
      let base64Data = data.toString('base64'); // base64 encoded
      payloadSizeInByte += base64Data.length;
      payloadSizeInByte += recordMetadataOverheadInBytes;
    });
    // Data is base64-encoded when the Data blob is serialized
    // Calculate payload size in Bytes.
    //let payloadSizeInByte = Math.ceil(AWS.util.base64.encode(data).length * 8 / 6);
    this._addSubsegment(parent, 'READ', payloadSizeInByte);
  }

  addWriteSubsegment(parent, params) {
    //console.log("addWriteSubsegment params", params);
    // Data is base64-encoded when the Data blob is serialized
    // Calculate payload size in Bytes.
    let payloadSizeInByte = Math.ceil(AWS.util.base64.encode(params.Data).length * 8 / 6);
    // Assumption of average utf8-base64 encoded record metadata size: 0 Bytes
    // (assumption made for faster computation and less performance overhead of tracing)
    const recordMetadataOverheadInBytes = 0;
    payloadSizeInByte += recordMetadataOverheadInBytes;
    this._addSubsegment(parent, 'WRITE', payloadSizeInByte);
  }

  _addSubsegment(parent, operation, payloadSizeInByte) {
    //console.log("Add Kinesis Subsegment with operation type and payload size.");
    let subsegment = parent.addNewSubsegment("KinesisCostradamus");
    let consumptions = {};
    let payloadSize = {
      "val": payloadSizeInByte,
      "type": "B"
    }
    let kinesisOp = {
      "val": operation,
      "type": "KINESISOPERATION"
    }

    consumptions.PayloadSize = payloadSize;
    consumptions.Operation = kinesisOp;
    subsegment.addMetadata("consumptions", consumptions, "KinesisCostradamus");
    subsegment.close();
  }
}
