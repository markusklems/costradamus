const cwlogs = require('cwlogs');

let getCloudWatchLogs = (lambdaFunctionName, startTime, endTime, searchPattern) => {
  const readable = cwlogs.readable({
    group: '/aws/lambda/' + lambdaFunctionName,
    region: 'us-east-1',
    messages: true,
    start: startTime,
    end: endTime,
    pattern: searchPattern
  });
  return readable;
}

let parseCloudWatchLogs = (lambdaFunctionName, startTime, endTime, requestId) => {
  return new Promise((resolve, reject) => {
    let logString = '';
    const searchPattern = `REPORT RequestId: ${requestId}`;
    let r = getCloudWatchLogs(lambdaFunctionName, startTime, endTime, searchPattern);
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
        let toReturn = {
          "Duration": reduced[0],
          "BilledDuration": reduced[1],
          "MemorySize": reduced[2],
          "MaxMemoryUsed": reduced[3]
        };
        resolve(toReturn);
      } else {
        reject(`Couldn\'t find CloudWatch logs for the specified time frame ${startTime} - ${endTime} and pattern ${searchPattern}.`);
      }
    });
  });
};

module.exports = parseCloudWatchLogs;
