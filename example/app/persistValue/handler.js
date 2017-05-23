/**
 * Created by jk on 12.05.17.
 */

'use strict';
const costradamus = require('costradamus');
const Costradamus = costradamus.Costradamus;
let c = new Costradamus();
let _tracing = true; //costradamus.toggle('persistValueTracing').then(val => let tracing = val;);
const AWSXRAY = c.getXRay();
const AWS = c.getAWS();

const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.handler = (event, context, callback) => {

  // TODO Check params

  const params = {
    TableName: 'ValuesTable',
    Item: {
      id: event.id,
      timestamp: event.timestamp,
      value: event.value
    }
  };

  costradamus.prepareDynamoDBParams(params, _tracing);

  let req = dynamo.put(params, (err, data) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null, data);
    }
  });

  costradamus.handleDynamoDBRequest(req, AWSXRAY.getSegment(), _tracing);
};
