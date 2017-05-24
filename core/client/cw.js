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

let string = '';
r.on('data', (chunk) => {
  let part = chunk.toString();
  string += part;
  console.log('stream data ' + part);

  //const regex = /Duration:/;
  //var result = chunk.match(regex);
  //var statusNumber = result[1];
  //var statusString = result[2];
});

r.on('end', () => {
  console.log('final output ' + string);
});

//.pipe(process.stdout);

module.exports = parseCloudWatchLogs;
