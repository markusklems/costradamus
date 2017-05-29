'use strict';

module.exports = class KinesisTracer {

  addSubsegment(parent, operation, payloadsize) {
    console.log("Add Kinesis Subsegment with operation type and payload size.");
    let subsegment = parent.addNewSubsegment("KinesisMetadata");
    subsegment.addMetadata("Operation", operation, "ResourceUsage");
    subsegment.addMetadata("MessagePayloadSize", payloadsize, "ResourceUsage");
    subsegment.close();
  }
}
