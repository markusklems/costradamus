const cwlogs = require('cwlogs');

let parseCloudWatchLogs = (lambdaFunctionName, startTime, endTime) => {
  const readable = cwlogs.readable({
    group: '/aws/lambda/' + lambdaFunctionName,
    region: 'us-east-1',
    messages: true,
    start: parseInt(startTime + '000'),
    end: parseInt(endTime + '999'),
    pattern: 'Duration:'
  });
  return readable;
}

let r = parseCloudWatchLogs('persistValueFunction', '1495549204', '1495549207');

let logString = '';
r.on('data', (chunk) => logString += chunk.toString());
r.on('end', () => {
  console.log('final output ' + logString);
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
  //console.log("reduced", reduced);
});

//.pipe(process.stdout);

module.exports = parseCloudWatchLogs;
