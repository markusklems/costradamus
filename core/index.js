'use strict';

module.exports = {
  toggle: require('./serverless/toggle.js'),
  Costradamus: require('./serverless/costradamus.js'),
  prepareDynamoDBParams: require('./serverless/tracing-dynamodb.js').prepareDynamoDBParams,
  handleDynamoDBRequest: require('./serverless/tracing-dynamodb.js').handleDynamoDBRequest
}
