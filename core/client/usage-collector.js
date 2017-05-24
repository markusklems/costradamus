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
      // TODO hardcoded values, get from document => transform to Unix epoch in ms
      // lambdaUsage.start_time lambdaUsage.end_time
      // lambdaUsage.name
      // lambdaUsage.aws.function_arn
      if (lambdaUsage.subsegments) {
        let lambdaMetadata = lambdaUsage.subsegments.find(finder.lambdaMetadataFinder);
        if (lambdaMetadata) {
          //console.log("lambdaMetadata", lambdaMetadata);
          const requestId = lambdaMetadata.metadata.ResourceUsage.RequestId;
          // add 15 seconds buffer before start and after end time
          // (to make sure that we catch the time window in cloudwatch that contains our request)
          let startTimeUnix = parseInt(lambdaUsage.start_time.toString().replace(/\./, '')) - 15000;
          let endTimeUnix = parseInt(lambdaUsage.end_time.toString().replace(/\./, '')) + 15000;
          //console.log('startTimeUnix', new Date(startTimeUnix));
          //console.log('endTimeUnix', new Date(endTimeUnix));
          //console.log('requestId', requestId)
          parseCloudWatchLogs(lambdaUsage.name, startTimeUnix, endTimeUnix, requestId).then(res => {
            resolve({
              name: 'LambdaUsage',
              value: res
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
  }

  if (document.subsegments) {
    // DynamoDB usage collection
    let dynamoUsageSubSeg = document.subsegments.find(finder.dynamoUsageFinder);
    //console.log(dynamoUsageSubSeg);
    if (dynamoUsageSubSeg) {
      let ddbUsage = dynamoUsageSubSeg.metadata.ResourceUsage;
      let p = new Promise((resolve, reject) => {
        resolve({
          name: 'DynamoDBConsumedCapacity',
          value: ddbUsage.DynamoDBConsumedCapacity
        });
      });
      promises.push(p);
    }

    // Lambda usage collection
    //let lambdaUsageSubSeg = //document.subsegments.find(finder.lambdaUsageFinder);
    ////console.log(dynamoCapacitySubSeg);
    //if (lambdaUsageSubSeg) {
    //  let lambdaUsage = lambdaUsageSubSeg;
    //  toReturn.LambdaUsage = lambdaUsage;
    //}
  }
  return new Promise((resolve, reject) => {
    Promise.all(promises).then(res => {
      let toReturn = {};
      if (res && res.length > 0) {
        toReturn[res[0].name] = res[0].value;
      }
      resolve(toReturn);
    }).catch(err => reject(err));
  });
}

module.exports = usageCollector;
