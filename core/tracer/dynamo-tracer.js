'use strict';

module.exports = class DynamoTracer {

  prepareParams(params) {
    params.ReturnConsumedCapacity = 'TOTAL';
  }

  addSubsegment(parent, dynamoResponseData, operationType) {
    //console.log("Add DynamoDB Subsegment with used Capacity Units.");
    let subsegment = parent.addNewSubsegment("DynamoDBCostradamus");
    let CapacityUnits = {
      "val": dynamoResponseData.ConsumedCapacity.CapacityUnits,
      "type": operationType
    }
    let consumptions = {};
    consumptions.CapacityUnits = CapacityUnits;
    let resourceName = dynamoResponseData.ConsumedCapacity.TableName;
    subsegment.addMetadata("consumptions", consumptions, "DynamoDBCostradamus");
    //subsegment.addMetadata("resourceName", resourceName, "DynamoDBCostradamus");
    subsegment.close();
  }
}
