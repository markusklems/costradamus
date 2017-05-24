const cwlogs = require('cwlogs');

let getCloudWatchLogs = (lambdaFunctionName, startTime, endTime) => {
  const readable = cwlogs.readable({
    group: '/aws/lambda/' + lambdaFunctionName,
    region: 'us-east-1',
    messages: true,
    start: startTime,
    end: endTime,
    pattern: 'Duration:'
  });
  return readable;
}

let parseCloudWatchLogs = (lambdaFunctionName, startTime, endTime) => {
  return new Promise((resolve, reject) => {
    let logString = '';
    let r = getCloudWatchLogs(lambdaFunctionName, startTime, endTime);
    r.on('error', err => reject(err));
    r.on('data', (chunk) => logString += chunk.toString());
    r.on('end', () => {
      //console.log('final output ' + logString);
      const regex = / /;
      let splitResult = logString.split(/Duration:|Memory Size:|Max Memory Used:/);
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
      resolve(reduced);
    });
  });
};

module.exports = parseCloudWatchLogs;
