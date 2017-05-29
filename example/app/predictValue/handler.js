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
const kinesis = new AWS.Kinesis({
  apiVersion: '2013-12-02'
});
const util = require('util');
const mavg = require('./mavg');

// Add cost tracers
let dynamoTracer = costradamus.getDynamoTracer();
let lambdaTracer = costradamus.getLambdaTracer();
let kinesisTracer = costradamus.getKinesisTracer();

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
      Limit: 100
    };

    dynamoTracer.prepareParams(params);

    dynamo.query(params, (err, data) => {
      if (err) reject(err);
      else {
        dynamoTracer.addSubsegment(AWSXRAY.getSegment(), data);
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
      }
    };

    dynamoTracer.prepareParams(params);

    dynamo.put(params, (err, data) => {
      if (err) reject(err);
      else {
        dynamoTracer.addSubsegment(AWSXRAY.getSegment(), data);
        resolve(data)
      };
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
        kinesisTracer.addSubsegment(AWSXRAY.getSegment(), 'KINESISPUTRECORD', params);
        resolve(data)
      };
    });
  })
};

module.exports.handler = (event, context, callback) => {
  lambdaTracer.addSubsegment(AWSXRAY.getSegment(), context.awsRequestId);

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
