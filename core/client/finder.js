'use strict';

let dynamoUsageFinder = (subsegment) => subsegment.name === 'DynamoDBConsumedCapacity';

let lambdaUsageFinder = (segment) => segment.origin === 'AWS::Lambda';

module.exports = {
  "dynamoUsageFinder": dynamoUsageFinder,
  "lambdaUsageFinder": lambdaUsageFinder
}
