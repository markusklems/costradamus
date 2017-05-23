/**
 * Created by jk on 12.05.17.
 */

'use strict';
const costradamus = require('costradamus');
let _tracing = costradamus.toggle('persistValueTracing');
const AWSXRAY = require('aws-xray-sdk-core');
costradamus.setup(AWSXRAY);
const AWS = AWSXRAY.captureAWS(require('aws-sdk'));

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

  if (_tracing) {
    params.ReturnConsumedCapacity = 'TOTAL';
  }

  let req = dynamo.put(params, (err, data) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      callback(null, data);
    }
  });

  req.on('success', res => {
    if (_tracing) {
      const contextUtils = require('aws-xray-sdk-core/lib/context_utils');
      let parent = contextUtils.resolveSegment(contextUtils.resolveManualSegmentParams(req.params));
      //console.log("parent sub/segment", parent);
      let subsegment = parent.addNewSubsegment("DynamoDBConsumedCapacity");
      let traceId = parent.segment ? parent.segment.trace_id : parent.trace_id;
      //console.log("traceId", traceId);
      let consumedCapacity = res.data.ConsumedCapacity;
      subsegment.addMetadata("DynamoDBConsumedCapacity", consumedCapacity, "ResourceUsage");
      subsegment.close();
    }
  });

};
