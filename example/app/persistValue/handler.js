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
  lambdaTracer.addSubsegment(AWSXRAY.getSegment(), context.awsRequestId);

  const params = {
    TableName: 'ValuesTable',
    Item: {
      id: event.id,
      timestamp: event.timestamp,
      value: event.value
    }
  };

  dynamoTracer.prepareParams(params);

  dynamo.put(params, (err, data) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      dynamoTracer.addSubsegment(AWSXRAY.getSegment(), data, 'WCU');
      callback(null, data);
    }
  });

};
