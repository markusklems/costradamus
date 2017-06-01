'use strict';

let lambdaUsageFinder = (segment) => segment.origin === 'AWS::Lambda::Function';
let lambdaMetadataFinder = (subsegment) => subsegment.name === 'LambdaCostradamus';

let dynamoMetadataFinder = (subsegment) => subsegment.name === 'DynamoDBCostradamus';
let dynamoUsageFinder = (segment) => (segment.subsegments && segment.subsegments.find(subsegment => subsegment.name === 'DynamoDB'));
let dynamoUsageFilter = (segment) => {
  return segment.subsegments.filter(subsegment => subsegment.name === 'DynamoDBCostradamus')
};

let kinesisMetadataFinder = (subsegment) => subsegment.name === 'KinesisCostradamus';
let kinesisUsageFinder = (segment) => segment.subsegments && segment.subsegments.find(subsegment => subsegment.name === 'Kinesis');
let kinesisUsageFilter = (segment) => {
  return segment.subsegments.filter(subsegment => subsegment.name === 'KinesisCostradamus')
};

module.exports = {
  "lambdaUsageFinder": lambdaUsageFinder,
  "lambdaMetadataFinder": lambdaMetadataFinder,
  "dynamoMetadataFinder": dynamoMetadataFinder,
  "dynamoUsageFinder": dynamoUsageFinder,
  "dynamoUsageFilter": dynamoUsageFilter,
  "kinesisMetadataFinder": kinesisMetadataFinder,
  "kinesisUsageFinder": kinesisUsageFinder,
  "kinesisUsageFilter": kinesisUsageFilter
}
