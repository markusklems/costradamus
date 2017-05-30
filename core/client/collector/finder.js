'use strict';

let lambdaUsageFinder = (segment) => segment.origin === 'AWS::Lambda::Function';
let lambdaMetadataFinder = (subsegment) => subsegment.name === 'LambdaMetadata';

let dynamoMetadataFinder = (subsegment) => subsegment.name === 'DynamoDBConsumedCapacity';
let dynamoUsageFinder = (segment) => segment.subsegments && segment.subsegments.find(subsegment => subsegment.name === 'DynamoDB');

let kinesisMetadataFinder = (subsegment) => subsegment.name === 'KinesisMetadata';
let kinesisUsageFinder = (segment) => segment.subsegments && segment.subsegments.find(subsegment => subsegment.name === 'Kinesis');

module.exports = {
  "lambdaUsageFinder": lambdaUsageFinder,
  "lambdaMetadataFinder": lambdaMetadataFinder,
  "dynamoMetadataFinder": dynamoMetadataFinder,
  "dynamoUsageFinder": dynamoUsageFinder,
  "kinesisMetadataFinder": kinesisMetadataFinder,
  "kinesisUsageFinder": kinesisUsageFinder
}
