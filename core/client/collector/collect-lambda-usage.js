'use strict';

const finder = require('./finder.js');
const parseCloudWatchLogs = require('./cw.js');
const cost = require('../pricing/lambda.js');

async function collectLambdaUsage(document) {
  const errMsg = `A problem occured while processing the X-Ray data of ${document.name}. Expected that the 'AWS::Lambda::Function' segment has a subsegment with name 'LambdaMetadata' but could not find it. Skip processing this Lambda function...`;
  if (document.subsegments) {
    let lambdaMetadata = document.subsegments.find(finder.lambdaMetadataFinder);
    if (lambdaMetadata) {
      const requestId = lambdaMetadata.metadata.LambdaCostradamus.RequestId;
      // add 5 seconds buffer before start and after end time
      // (to make sure that we catch the time window in cloudwatch that contains our request)
      let startTimeUnix = (document.start_time * 1000) - 5000;
      let endTimeUnix = (document.end_time * 1000) + 5000;
      //let startTimeUnixSec = document.start_time - 60;
      //let endTimeUnixSec = document.end_time + 60;
      const resourceId = document.aws.function_arn;
      const resourceName = document.name;
      //console.log("resourceName", resourceName)
      console.log('document.start_time', document.start_time);
      console.log('document.end_time', document.end_time);
      console.log('startTimeUnix', new Date(startTimeUnix));
      console.log('endTimeUnix', new Date(endTimeUnix));
      console.log('requestId', requestId);

      try {
        let res = await parseCloudWatchLogs(resourceName, startTimeUnix, endTimeUnix, requestId);
        //console.log("Parsed CloudWatch logs:", res);
        let costResult = cost(res);
        return new Promise((resolve, reject) => {
          resolve({
            "consumptions": res,
            "cost": costResult
          });
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error(errMsg);
    }
  } else {
    console.error(errMsg);
  }
  // In case something went wrong, we still resolve (to an empty object)
  return new Promise((resolve, reject) => {
    resolve({})
  });
}

module.exports = collectLambdaUsage;
