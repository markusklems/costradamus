/**
 * Created by jk on 12.05.17.
 */

'use strict';

const AWSXRAY = require('aws-xray-sdk-core');
AWSXRAY.middleware.setSamplingRules('./sampling-rules.json');
const AWS = AWSXRAY.captureAWS(require('aws-sdk'));
const kinesis = new AWS.Kinesis({
  apiVersion: '2013-12-02'
});
const util = require('util');

const getShardIterator = (streamName, from, shardId) => {
  if (shardId === undefined) shardId = 'shardId-000000000000';
  return new Promise((resolve, reject) => {
    const params = {
      ShardId: shardId,
      /* required */
      ShardIteratorType: 'AT_TIMESTAMP',
      /* required */
      StreamName: streamName,
      /* required */
      Timestamp: from
    };
    kinesis.getShardIterator(params, (err, data) => {
      if (err) reject(err);
      else {
        // console.log('Result from getShardIterator(): ' +util.inspect(data));
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
    kinesis.getRecords(params, (err, data) => {
      if (err) reject(err);
      else {
        // console.log('Result from getRecords(): ' +util.inspect(data));
        const notifis = [],
          records = Array.from(data.Records);
        // console.log('Records: ' +util.inspect(records));
        for (let r in records) {
          notifis.push(JSON.parse(records[r].Data));
        }
        // console.log('Notfications: ' +util.inspect(notifis));
        resolve(notifis);
      }
    });

  })
};

module.exports.handler = (event, context, callback) => {

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
