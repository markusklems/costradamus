'use strict';

module.exports = class LambdaTracer {

  addSubsegment(parent, requestId) {
    //console.log("add Lambda Subsegment with RequestId");
    let subsegment = parent.addNewSubsegment("LambdaCostradamus");
    subsegment.addMetadata("RequestId", requestId, "LambdaCostradamus");
    subsegment.close();
  }
}
