// Configs
//let REGION = 'us-east-1';
let REGION = 'eu-west-1';
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
  .option('-e, --ephemeral', 'We write no output file')
  .parse(process.argv);

let functionName = program['functionName'] || 'persistValueFunction';
let number = program['number'] || 1;
let outputFile = program['outputFile'] || 'user_traces.txt';
let ephemeral = program['ephemeral'] || false;

console.log(`Invoking ${functionName}`);

class ResponseQueue extends EventEmitter {
  constructor(number, outputFile) {
    super();
    this.number = number;
    this.counter = 0;
    this.messages = [];
    if (!ephemeral) {
      this.fileWriteStream = fs.createWriteStream(path.join(__dirname, outputFile));
    }
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
  if (!ephemeral) {
    responsesQ.write(msg);
  }
});

for (let i = 1; i <= number; i++) {
  console.log(`Sending request #${i}.`);
  let event = JSON.parse(fs.readFileSync(path.join(__dirname, 'workloads', `${functionName}Event.json`)));
  // We write as many values as there are iterations, by increasing the timestamp + 1 for each iteration.
  if (functionName === 'persistValueFunction' || functionName === 'ingestValueFunction') {
    event.timestamp = event.timestamp + i;
  }
  invokeFunction(functionName, event);
}

function invokeFunction(functionName, event) {
  const params = {
    FunctionName: functionName,
    InvocationType: 'RequestResponse',
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
