'use strict';

const finder = require('./finder.js');
const cwlogs = require('cwlogs');

let usageCollector = (document) => {
  let promises = [];

  if (finder.lambdaUsageFinder(document)) {
    let lambdaUsage = document;
    //console.log("lambdaUsage", lambdaUsage);
    let parseCloudWatchLogs = require('./cw.js');
    let p = new Promise((resolve, reject) => {
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
            resolve({
              "service": "lambda",
              "resourceName": resourceName,
              "resourceId": resourceId,
              "consumptions": res
            });
          }).catch(err => reject(err));
        } else {
          console.error(errMsg);
        }
      } else {
        console.error(errMsg);
      }
    });
    promises.push(p);
    console.log("Lambda promises.push(p)", promises);
  }

  if (document.subsegments) {
    // DynamoDB usage collection
    let p = new Promise((resolve, reject) => {
      let dynamoUsageSubSeg = document.subsegments.find(finder.dynamoUsageFinder);
      if (dynamoUsageSubSeg) {
        let ddbUsage = dynamoUsageSubSeg.metadata.ResourceUsage;
        if (ddbUsage) {
          resolve(ddbUsage.Metadata);
        } else {
          reject(`Expected to find a metadata.ResourceUsage property for the subsegment. Skip processing DynamoDB usage for subsegment ${dynamoUsageSubSeg}.`);
        }
      }
    });
    promises.push(p);
    console.log("Dynamo promises.push(p)", promises);
  }

  return new Promise((resolve, reject) => {
    console.log("promises", promises);
    let invocations = [];
    Promise.all(promises).then(res => {
      console.log("res", res);
      if (res && res.length > 0) {
        res.forEach(i => invocations.push(i));
      }
      if (invocations && invocations.length > 0) {
        resolve({
          "traceId": "xray-0000000000001",
          "origin": "POST /app/meter",
          "invocations": invocations
        });
      } else {
        resolve({});
      }
    }).catch(err => reject(err));
  });
}

module.exports = usageCollector;
