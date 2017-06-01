// Configs
let REGION = 'us-east-1';
const AWS = require('aws-sdk');
AWS.config.update({
  region: REGION
});
const lambda = new AWS.Lambda({
  apiVersion: '2015-03-31'
});
const fs = require('fs');
const path = require('path');
const program = require('commander');
const EventEmitter = require('events').EventEmitter;

program
  .version('1.0.0')
  .option('-f, --function-name [value]', 'Lambda function name')
  .option('-n, --number <n>', 'Number of repeated requests')
  .option('-o, --output-file [value]', 'Traces output file')
  .parse(process.argv);

console.log(program['functionName']);

let functionName = program['functionName'] || 'persistValueFunction';
let number = program['number'] || 1;
let outputFile = program['outputFile'] || 'user_traces.txt';

class ResponseQueue extends EventEmitter {
  constructor(number, outputFile) {
    super();
    this.number = number;
    this.counter = 0;
    this.messages = [];
    this.fileWriteStream = fs.createWriteStream(path.join(__dirname, outputFile));
  }

  write(msg) {
    this.counter++;
    this.fileWriteStream.write(msg);
    if (this.number <= this.counter) {
      this.fileWriteStream.end();
    }
  }
}

let responsesQ = new ResponseQueue(number, outputFile);
responsesQ.on('trace', msg => {
  responsesQ.write(msg);
});
console.log("number", number);
for (let i = 1; i <= number; i++) {
  console.log(`Sending request #${i}.`);
  invokeFunction(functionName);
}

function invokeFunction(functionName) {
  let event = JSON.parse(fs.readFileSync(path.join(__dirname, 'workloads', `${functionName}Event.json`)));
  const params = {
    FunctionName: functionName,
    InvocationType: 'Event',
    Payload: JSON.stringify(event, null)
  };
  let req = lambda.invoke(params, (err, data) => {
    if (err) {
      console.log(err, err.stack, err.message);
      console.error(err);
    } else {
      console.log(data);
    }
  });

  req.on('success', res => {
    let method = req.httpRequest.method;
    let path = req.httpRequest.path;
    let regex = /root=(.*);/;
    let traceId = regex.exec(res.httpResponse.headers['x-amzn-trace-id'])[1];
    console.log(`Received response with trace id ${traceId}.`);
    responsesQ.emit('trace', `${method} ${path} ${traceId}\n`);
  });
}
