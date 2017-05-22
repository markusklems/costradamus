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
  else console.log(data); // successful response
});

//module.exports = class XRayClient {
//  constructor() {}
//
//}
