'use strict';

const finder = require('./finder.js');
const cwlogs = require('cwlogs');
const cost = require('../pricing/lambda.js');

let collectLambdaUsage = (document) => {
  return new Promise((resolve, reject) => {
    let lambdaUsage = document;
    //console.log("lambdaUsage", lambdaUsage);
    let parseCloudWatchLogs = require('./cw.js');
    const errMsg = `A problem occured while processing the X-Ray data of ${lambdaUsage.name}. Expected that the 'AWS::Lambda::Function' segment has a subsegment with name 'LambdaMetadata' but could not find it. Skip processing this Lambda function...`;
    if (lambdaUsage.subsegments) {
      let lambdaMetadata = lambdaUsage.subsegments.find(finder.lambdaMetadataFinder);
      if (lambdaMetadata) {
        //console.log("lambdaMetadata", lambdaMetadata);
        const requestId = lambdaMetadata.metadata.ResourceUsage.RequestId;
        // add 5 seconds buffer before start and after end time
        // (to make sure that we catch the time window in cloudwatch that contains our request)
        let startTimeUnix = parseInt(lambdaUsage.start_time.toString().replace(/\./, '')) - 5000;
        let endTimeUnix = parseInt(lambdaUsage.end_time.toString().replace(/\./, '')) + 5000;
        const resourceId = lambdaUsage.aws.function_arn;
        const resourceName = lambdaUsage.name;
        //console.log("resourceName", resourceName)
        //console.log('startTimeUnix', new Date(startTimeUnix));
        //console.log('endTimeUnix', new Date(endTimeUnix));
        //console.log('requestId', requestId);
        parseCloudWatchLogs(resourceName, startTimeUnix, endTimeUnix, requestId).then(res => {
          // TODO
          resolve({
            "metadata": {
              "service": "lambda",
              "resourceName": resourceName,
              "resourceId": resourceId,
              "consumptions": res
            },
            "cost": cost(res)
          });
        }).catch(err => reject(err));
      } else {
        reject(errMsg);
      }
    } else {
      reject(errMsg);
    }
  });
}

module.exports = collectLambdaUsage;
