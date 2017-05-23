'use strict';

const AWS = require('aws-sdk');
const XRay = new AWS.XRay({
  region: 'us-east-1'
});

const params = {
  TraceIds: [
    '1-59244514-05996dd9e36837dd31478567'
  ]
};

XRay.batchGetTraces(params, (err, data) => {
  if (err) console.log(err, err.stack); // an error occurred
  else {
    //console.log(data);
    let segments = data.Traces[0].Segments;
    segments.forEach(segment => {
      let document = JSON.parse(segment.Document);
      //console.log(document);
      if (document.subsegments) {
        let dynamoSubSeg = document.subsegments.find(subsegment => subsegment.name === 'DynamoDB');
        let dynamoCapacitySubSeg = document.subsegments.find(subsegment => subsegment.name === 'DynamoDBConsumedCapacity');
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
