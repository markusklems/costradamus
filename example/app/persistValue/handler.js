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
    Item: {
      id: event.id,
      timestamp: event.timestamp,
      value: event.value
    }
  };

  dynamoTracer.prepareParams(params);

  let req = dynamo.put(params, (err, data) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null, data);
    }
  });

  dynamoTracer.handleRequest(req);
};
