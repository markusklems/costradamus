'use strict';

let main = require('./main.js');

let traceIds = ['1-5930760a-6673bb957b8d80e9456c4ded', '1-5930760a-9736efdead2bb1f5c7ec47e6', '1-5930760b-1f10187140b09dee47cf3704']
// Start
traceIds.forEach(tid => {
  main(tid).then(res => console.log(`${tid} done.`)).catch(err => console.error(err));
});
