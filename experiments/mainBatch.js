'use strict';

let main = require('costradamus/client/main.js');
const fs = require('fs');
const path = require('path');
const program = require('commander');
const Util = require('util');

/**
 * CLI
 */

program
  .version('1.0.0')
  .option('-i, --input-file [value]', 'Trace id.')
  .option('-o, --output-dir [value]', 'Directory with processed trace data from x-ray + costradamus.')
  .parse(process.argv);

const input_file = program['inputFile'];
const input_path = path.join(__dirname, `${input_file}`);
const output_path = path.join(__dirname, `${program['outputDir']}`);

let waitFor = 0;

var lineReader = require('readline').createInterface({
  input: fs.createReadStream(input_path)
});

lineReader.on('line', (line) => {
  console.log('Line from file:', line);
  const columns = line.split(' ');
  const trace_id = columns[2];
  console.log('Trace_id: ' + trace_id);
  // We need to throttle this because otherwise we run into X-Ray rate exceeded exceptions.
  waitFor += 2000;
  setTimeout(() => {
    main(trace_id, output_path).then(res => console.log(`${trace_id} done.`)).catch(err => console.error('Trace-Id: ' + trace_id + ', Error: ' + err));
  }, waitFor);
});

/*
traceIds.forEach(tid => {
  main(tid).then(res => console.log(`${tid} done.`)).catch(err => console.error(err));
});
*/
