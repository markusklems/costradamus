'use strict';

let traceIds = []
// Start
traceIds.forEach(tid => {
  main(tid).then(res => console.log(`${tid} done.`)).catch(err => console.error(err));
});
