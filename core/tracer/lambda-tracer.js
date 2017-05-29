'use strict';

module.exports = class LambdaTracer {
  constructor(_segment) {
    this._segment = _segment;
  }

  addSubsegment(requestId) {
    console.log("add Lambda Subsegment with RequestId");
    let parent = this._segment;
    let subsegment = parent.addNewSubsegment("LambdaMetadata");
    let traceId = parent.segment ? parent.segment.trace_id : parent.trace_id;
    subsegment.addMetadata("RequestId", requestId, "ResourceUsage");
    subsegment.close();
  }
}
