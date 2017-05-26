/**
 * Created by jk on 12.05.17.
 */

'use strict';

const Costradamus = require('costradamus');
let costradamus = new Costradamus();
costradamus.init('persistValue');
const AWSXRAY = costradamus.getXRay();
const AWS = costradamus.getAWS();

const dynamo = new AWS.DynamoDB.DocumentClient();

// Add cost tracers
let dynamoTracer = costradamus.getDynamoTracer();
let lambdaTracer = costradamus.getLambdaTracer();

module.exports.handler = (event, context, callback) => {
  lambdaTracer.addSubsegment(context.awsRequestId);
  // TODO Check params

  const params = {
    TableName: 'ValuesTable',
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
    Limit: 100
  };

  dynamoTracer.prepareParams(params);

  let req = dynamo.query(params, (err, data) => {
    if (err) callback(err);
    else {
      callback(null, data.Items);
    }
  });

  dynamoTracer.handleRequest(req);
};
