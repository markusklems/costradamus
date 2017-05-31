/**
 * Created by jk on 12.05.17.
 */

'use strict';

const Costradamus = require('costradamus');
let costradamus = new Costradamus();
costradamus.init('readNotifications');
const AWSXRAY = costradamus.getXRay();
const AWS = costradamus.getAWS();
const kinesis = new AWS.Kinesis({
  apiVersion: '2013-12-02'
});
const util = require('util');

// Add cost tracers
let lambdaTracer = costradamus.getLambdaTracer();
let kinesisTracer = costradamus.getKinesisTracer();

const getShardIterator = (streamName, from, shardId) => {
  if (shardId === undefined) shardId = 'shardId-000000000000';
  return new Promise((resolve, reject) => {
    const params = {
      ShardId: shardId,
      /* required */
      ShardIteratorType: 'AT_TIMESTAMP',
      /* required */
      StreamName: streamName,
      /* required for ShardIteratorType: 'AT_TIMESTAMP' */
      Timestamp: from
    };
    //console.log('getShardIterator params: ' + util.inspect(params));
    kinesis.getShardIterator(params, (err, data) => {
      if (err) reject(err);
      else {
        //console.log('Result from getShardIterator(): ' + util.inspect(data));
        resolve(data.ShardIterator);
      }
    });
  })
};

const getRecords = shardIterator => {
  return new Promise((resolve, reject) => {
    const params = {
      ShardIterator: shardIterator /* required */
    };
    //console.log('getRecords params: ' + util.inspect(params));
    kinesis.getRecords(params, (err, data) => {
      // TODO
      if (err) reject(err);
      else {
        //console.log('Result from getRecords(): ' + util.inspect(data));
        const notifis = [],
          records = Array.from(data.Records);
        kinesisTracer.addReadSubsegment(AWSXRAY.getSegment(), records);
        //console.log('Records: ' + util.inspect(records));
        for (let r in records) {
          notifis.push(JSON.parse(records[r].Data));
        }
        console.log('Notfications: ' + util.inspect(notifis));
        resolve(notifis);
      }
    });

  })
};

module.exports.handler = (event, context, callback) => {
  console.log("context", context);
  //lambdaTracer.addSubsegment(AWSXRAY.getSegment(), context.awsRequestId);
  getShardIterator('NotificationsStream', event.start)
    .then(shardIterator => {
      return getRecords(shardIterator);
    })
    .then(records => {
      callback(null, records);
    })
    .catch(err => {
      callback(err)
    });

};
