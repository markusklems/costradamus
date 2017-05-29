'use strict';

module.exports = class DynamoTracer {
  constructor(_segment) {
    this._segment = _segment;
  }

  prepareParams(params) {
    params.ReturnConsumedCapacity = 'TOTAL';
  }

  handleRequest(req) {
    console.log("Add DynamoDB Subsegment with used Capacity Units.");
    let parent = this._segment;
    req.on('success', res => {
      //console.log("parent sub/segment", parent);
      let subsegment = parent.addNewSubsegment("DynamoDBConsumedCapacity");
      let traceId = parent.segment ? parent.segment.trace_id : parent.trace_id;
      //console.log("traceId", traceId);
      console.log("DYNAMO REQ", req);
      console.log("DYNAMO RES DATA", res.data);
      let metadata = {
        "service": "dynamodb",
        "resourceName": res.data.ConsumedCapacity.TableName,
        "consumptions": {
          "Operation": req.operation,
          "CapacityUnits": res.data.ConsumedCapacity.CapacityUnits
        }
      };
      subsegment.addMetadata("Metadata", metadata, "ResourceUsage");
      subsegment.close();
    });
  }
}
