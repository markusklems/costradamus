'use strict';

let prepareDynamoDBParams = (params, _tracing) => {
  console.log("prepareDynamoDBParams tracing", _tracing);
  if (_tracing) {
    params.ReturnConsumedCapacity = 'TOTAL';
  }
};

let handleDynamoDBRequest = (req, parent, _tracing) => {
  console.log("handleDynamoDBRequest tracing", _tracing);
  if (_tracing) {
    req.on('success', res => {
      console.log("parent sub/segment", parent);
      let subsegment = parent.addNewSubsegment("DynamoDBConsumedCapacity");
      let traceId = parent.segment ? parent.segment.trace_id : parent.trace_id;
      console.log("traceId", traceId);
      let consumedCapacity = res.data.ConsumedCapacity;
      subsegment.addMetadata("DynamoDBConsumedCapacity", consumedCapacity, "ResourceUsage");
      subsegment.close();
    });
  }
}

module.exports = {
  "prepareDynamoDBParams": prepareDynamoDBParams,
  "handleDynamoDBRequest": handleDynamoDBRequest
};
