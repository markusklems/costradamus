'use strict';

const AWS = require('aws-sdk');
const XRay = new AWS.XRay({
  region: 'us-east-1'
});

const params = {
  TraceIds: [
    '1-5922d9e9-8eae4552bac1d2d4f6e450eb'
  ]
};

XRay.batchGetTraces(params, (err, data) => {
  if (err) console.log(err, err.stack); // an error occurred
  else {
    //console.log(data);
    let segments = data.Traces[0].Segments;
    segments.forEach(segment => {
      let document = JSON.parse(segment.Document);
      if (document.subsegments) {
        let dynamoSubSeg = document.subsegments.find(subsegment => subsegment.name === 'DynamoDB');
        let dynamoCapacitySubSeg = dynamoSubSeg.subsegments.find(subsegment => subsegment.name === 'DynamoDBConsumedCapacity');
        //console.log(dynamoCapacitySubSeg);
        let ResourceUsage = dynamoCapacitySubSeg.metadata.ResourceUsage;
        console.log(ResourceUsage);
      }
    });
  }
});

//module.exports = class XRayClient {
//  constructor() {}
//
//}
