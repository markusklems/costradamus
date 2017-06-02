'use strict';

let main = require('./main.js');
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
    .parse(process.argv);

const input_file = program['inputFile'] || '1-5930549c-763e04889a0bb576ba23ae9f';
const input_path = path.join(__dirname, `${input_file}`);

var lineReader = require('readline').createInterface({
  input: fs.createReadStream(input_path)
});

lineReader.on('line', (line) => {
  console.log('Line from file:', line);
  const columns = line.split(' ');
  const trace_id = columns[2];
  main(trace_id).then(res => console.log(`${trace_id} done.`)).catch(err => console.error(err));
});


// Start
/*
traceIds.forEach(tid => {
  main(tid).then(res => console.log(`${tid} done.`)).catch(err => console.error(err));
});
*/