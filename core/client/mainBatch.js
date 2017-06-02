'use strict';

let main = require('./main.js');

let traceIds = [
  '1-593186ae-a7ffe5dcf78d155b02be77f1'
];
// Start
traceIds.forEach(tid => {
  main(tid).then(res => console.log(`${tid} done.`)).catch(err => console.error(err));
});
