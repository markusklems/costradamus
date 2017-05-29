'use strict';

module.exports = class KinesisTracer {
  constructor(_segment) {
    this._segment = _segment;
  }

  addSubsegment(operation, payloadsize) {
    console.log("Add Kinesis Subsegment with operation type and payload size.");
    let parent = this._segment;
    let subsegment = parent.addNewSubsegment("KinesisMetadata");
    let traceId = parent.segment ? parent.segment.trace_id : parent.trace_id;
    subsegment.addMetadata("Operation", operation, "ResourceUsage");
    subsegment.addMetadata("MessagePayloadSize", payloadsize, "ResourceUsage");
    subsegment.close();
  }
}
