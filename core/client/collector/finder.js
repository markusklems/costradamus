'use strict';

let lambdaUsageFinder = (doc) => doc.origin === 'AWS::Lambda::Function';
let lambdaMetadataFinder = (subsegment) => subsegment.name === 'LambdaMetadata';

let dynamoMetadataFinder = (subsegment) => subsegment.name === 'DynamoDBConsumedCapacity';
let dynamoUsageFinder = (doc) => doc.subsegments && doc.subsegments.find(subsegment => subsegment.name === 'DynamoDB' && subsegment.subsegments.find(dynamoMetadataFinder));

module.exports = {
  "dynamoMetadataFinder": dynamoMetadataFinder,
  "dynamoUsageFinder": dynamoUsageFinder,
  "lambdaUsageFinder": lambdaUsageFinder,
  "lambdaMetadataFinder": lambdaMetadataFinder
}
