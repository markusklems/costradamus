'use strict';

const AWS = require('aws-sdk');

module.exports = class DynamoTracer {

  prepareParams(params) {
    params.ReturnConsumedCapacity = 'TOTAL';
  }

  _addSubsegment(parent, dynamoResponseData, operationType, payloadSizeInByte) {
    //console.log("Add DynamoDB Subsegment with used Capacity Units.");
    let subsegment = parent.addNewSubsegment("DynamoDBCostradamus");
    let CapacityUnits = {
      "val": dynamoResponseData.ConsumedCapacity.CapacityUnits,
      "type": operationType
    };
    let PayloadSize = {
      "val": payloadSizeInByte,
      "type": "B"
    };
    let consumptions = {};
    consumptions.CapacityUnits = CapacityUnits;
    consumptions.PayloadSize = PayloadSize;
    let resourceName = dynamoResponseData.ConsumedCapacity.TableName;
    subsegment.addMetadata("consumptions", consumptions, "DynamoDBCostradamus");
    //subsegment.addMetadata("resourceName", resourceName, "DynamoDBCostradamus");
    subsegment.close();
  }

  addWriteSubsegment(parent, dynamoResponseData) {
    // Data is base64-encoded when the Data blob is serialized
    // Calculate payload size in Bytes.
    let payloadSizeInByte = 0; //Math.ceil(AWS.util.base64.encode(this.params.Item).length * 8 / 6);
    // Assumption of average utf8-base64 encoded record metadata size: 0 Bytes
    // (assumption made for faster computation and less performance overhead of tracing)
    const = metadataOverheadInBytes = 0;
    payloadSizeInByte += metadataOverheadInBytes;
    this._addSubsegment(parent, dynamoResponseData, 'WCU', payloadSizeInByte);
  }

  addReadSubsegment(parent, dynamoResponseData) {
    // Data is base64-encoded when the Data blob is serialized
    // Calculate payload size in Bytes.
    let payloadSizeInByte = 0; //Math.ceil(AWS.util.base64.encode(dynamoResponseData).length * 8 / 6);
    // Assumption of average utf8-base64 encoded record metadata size: 0 Bytes
    // (assumption made for faster computation and less performance overhead of tracing)
    const = metadataOverheadInBytes = 0;
    payloadSizeInByte += metadataOverheadInBytes;
    this._addSubsegment(parent, dynamoResponseData, 'RCU', payloadSizeInByte);
  }

}
