const cwlogs = require('cwlogs');
const config = require('../config.js');

function parseCloudWatchLogs(lambdaFunctionName, startTime, endTime, requestId) {
  return new Promise((resolve, reject) => {
    let logString = '';
    const searchPattern = `REPORT RequestId: ${requestId}`;
    let r = cwlogs.readable({
      group: '/aws/lambda/' + lambdaFunctionName,
      region: config.region,
      messages: true,
      start: startTime,
      end: endTime,
      pattern: searchPattern
    });
    r.on('error', err => reject(err));
    r.on('data', (chunk) => logString += chunk.toString());
    r.on('end', () => {
      //console.log(logString);
      const regex = / /;
      let splitResult = logString.split(/Duration:|Memory Size:|Max Memory Used:/);
      if (splitResult.length > 1) {
        splitResult.shift(); // remove the first entry, i.e., "RequestId: ..."
        let reduced = splitResult.reduce((acc, curr) => {
          const regex = / |\t|\n/;
          const makeObj = (str) => {
            return {
              "val": str.split(regex)[1],
              "type": str.split(regex)[2]
            }
          };
          if (Array.isArray(acc)) {
            acc.push(makeObj(curr));
            return acc;
          } else {
            return [makeObj(acc), makeObj(curr)];
          }
        });
        //let duration = Math.ceil(parseInt(reduced[0])).toString();
        let durationValue = parseInt(reduced[0].val).toString();
        let durationType = reduced[0].type;
        let duration = {
          val: durationValue,
          type: durationType
        }
        let toReturn = {
          "Duration": duration,
          "BilledDuration": reduced[1],
          "MemorySize": reduced[2],
          "MaxMemoryUsed": reduced[3]
        };
        //console.log("CloudWatch output:", toReturn);
        resolve(toReturn);
      } else {
        console.error(`Couldn\'t find CloudWatch logs for the specified time frame ${startTime} - ${endTime} (${new Date(startTime)} - ${new Date(endTime)}) and pattern ${searchPattern}.`);
        resolve({});
      }
    });
  });
};

module.exports = parseCloudWatchLogs;
