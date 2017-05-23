'use strict';

module.exports = {
  toggle: require('./serverless/toggle.js'),
  setup: require('./serverless/tracing-aws-sdk.js'),
  prepareDynamoDBParams: require('./serverless/tracing-dynamodb.js').prepareDynamoDBParams,
  handleDynamoDBRequest: require('./serverless/tracing-dynamodb.js').handleDynamoDBRequest
}
