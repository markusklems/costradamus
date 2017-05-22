/**
 * Created by jk on 12.05.17.
 */

'use strict';

const AWSXRAY = require('aws-xray-sdk-core');
AWSXRAY.middleware.setSamplingRules('./sampling-rules.json');
const AWS = AWSXRAY.captureAWS(require('aws-sdk'));
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.handler = (event, context, callback) => {

  // TODO Check params

  const params = {
    TableName: 'PredictionsTable',
    Select: 'ALL_ATTRIBUTES',
    ExpressionAttributeValues: {
      ":id": event.id,
      ":start": event.start,
      ":end": event.end
    },
    ExpressionAttributeNames: {
      '#t': 'timestamp'
    },
    KeyConditionExpression: "id = :id AND #t BETWEEN :start AND :end",
    ReturnConsumedCapacity: "TOTAL",
    Limit: 100
  };

  return dynamo.query(params, (err, data) => {
    if (err) callback(err);
    else {
      // TODO add X-Ray hook. Payload: data.ConsumedCapacity
      callback(null, data.Items);
    }
  });
};
