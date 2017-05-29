'use strict';

let dynamoUsageFinder = (subsegment) => subsegment.name === 'DynamoDBConsumedCapacity';

let lambdaUsageFinder = (subsegment) => subsegment.origin === 'AWS::Lambda::Function';
let lambdaMetadataFinder = (subsegment) => subsegment.name === 'LambdaMetadata';

module.exports = {
  "dynamoUsageFinder": dynamoUsageFinder,
  "lambdaUsageFinder": lambdaUsageFinder,
  "lambdaMetadataFinder": lambdaMetadataFinder
}
