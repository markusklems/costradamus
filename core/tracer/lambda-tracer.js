'use strict';

module.exports = class LambdaTracer {

  addSubsegment(parent, requestId) {
    console.log("add Lambda Subsegment with RequestId");
    let subsegment = parent.addNewSubsegment("LambdaMetadata");
    subsegment.addMetadata("RequestId", requestId, "ResourceUsage");
    subsegment.close();
  }
}
