'use strict';

module.exports = class DynamoTracer {

  prepareParams(params) {
    params.ReturnConsumedCapacity = 'TOTAL';
  }

  addSubsegment(parent, dynamoResponseData, operationType) {
    console.log("Add DynamoDB Subsegment with used Capacity Units.");
    let subsegment = parent.addNewSubsegment("DynamoDBConsumedCapacity");
    let CapacityUnits = {
      "val": dynamoResponseData.ConsumedCapacity.CapacityUnits,
      "type": operationType
    }
    let consumptions = {};
    consumptions.CapacityUnits = CapacityUnits;
    let resourceName = dynamoResponseData.ConsumedCapacity.TableName;
    subsegment.addMetadata("consumptions", consumptions, "DynamoDBConsumedCapacity");
    subsegment.addMetadata("resourceName", resourceName, "DynamoDBConsumedCapacity");
    subsegment.close();
  }

  // @deprecated
  //handleRequest(req) {
  //  console.log("Add DynamoDB Subsegment with used Capacity Units.");
  //  let parent = this._segment;
  //  req.on('success', res => {
  //    //console.log("parent sub/segment", parent);
  //    let subsegment = parent.addNewSubsegment("DynamoDBConsumedCapacity");
  //    let consumedCapacity = res.data.ConsumedCapacity;
  //    subsegment.addMetadata("DynamoDBConsumedCapacity", consumedCapacity, "ResourceUsage");
  //    subsegment.close();
  //  });
  //}

}
