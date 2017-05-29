/**
 * Created by jk on 12.05.17.
 */

'use strict';

const AWSXRAY = require('aws-xray-sdk-core');
AWSXRAY.middleware.setSamplingRules('./sampling-rules.json');
const AWS = AWSXRAY.captureAWS(require('aws-sdk'));
const dynamo = new AWS.DynamoDB.DocumentClient();
const kinesis = new AWS.Kinesis({
  apiVersion: '2013-12-02'
});
const util = require('util');
const mavg = require('./mavg');

<<<<<<< HEAD
=======
// Add cost tracers
let dynamoTracer = costradamus.getDynamoTracer();
let lambdaTracer = costradamus.getLambdaTracer();
let kinesisTracer = costradamus.getKinesisTracer();

>>>>>>> 78097b020d5f6ed77da8c48cd403439712d161b8
const readMissingValues = (id, start, end) => {
  // console.log('Reading missing values: { id:' +id+ ', start:' +start+ ', end:' +end+ '}');
  return new Promise((resolve, reject) => {
    const params = {
      TableName: 'ValuesTable',
      Select: 'ALL_ATTRIBUTES',
      ExpressionAttributeValues: {
        ":id": id,
        ":start": start,
        ":end": end
      },
      ExpressionAttributeNames: {
        '#t': 'timestamp'
      },
      KeyConditionExpression: "id = :id AND #t BETWEEN :start AND :end",
      ReturnConsumedCapacity: "TOTAL",
      Limit: 100
    };

    dynamo.query(params, (err, data) => {
      if (err) reject(err);
      else {
        // console.log('Data from dynamo: ' +util.inspect(data));
        resolve(data);
      }
    });
  });
};

const sendToDynamodb = event => {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: 'PredictionsTable',
      Item: {
        id: event.id,
        timestamp: event.timestamp,
        value: event.value
      },
      ReturnConsumedCapacity: "TOTAL"
    };

    return dynamo.put(params, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const sendToKinesis = event => {
  return new Promise((resolve, reject) => {
    const params = {
      Data: JSON.stringify(event),
      /* required */
      PartitionKey: event.id,
      /* required */
      StreamName: 'NotificationsStream' /* required */
    };

    kinesis.putRecord(params, (err, data) => {
      if (err) reject(err);
      else {
        // TODO length is not an accurate measure => encoding
        // data is base64-encoded when the blob is serialized
        kinesisTracer.addSubsegment('putRecord', params.Data.length);
        resolve(data)
      };
    });
  })
};

module.exports.handler = (event, context, callback) => {

  // TODO Check params

  // Read missing values from DynamoDB
  readMissingValues(event.id, event.timestamp - 3, event.timestamp)
    .then(data => {
      // console.log('Data from promise: ' +util.inspect(data));
      const model = mavg(data.Items);
      const promises = [];
      for (let m in model) {
        promises.push(sendToDynamodb(model[m]));
        //const absChange = Math.abs((model[m].value - event.value) / (model[m].timestamp - event.timestamp));
        //if(absChange >= 1) {                // Push record to Kinesis if absolute change per second is greater than 1.
        promises.push(sendToKinesis(model[m]));
        //}
      }
      Promise.all(promises)
        .then(responses => {
          responses = Array.from(responses);
          for (let r in responses) {
            console.log('Response: ' + util.inspect(responses[r]));
          }
          callback(null, "Success!");
        })
        .catch(err => {
          callback(err);
        });
    })
    .catch(err => {
      callback(err);
    });

};
