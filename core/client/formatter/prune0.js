'use strict';

const finder = require('./collector/finder.js');

async function prune(segmentsPromise) {
  let segments = await segmentsPromise;
  segments.forEach(segment => {
    traverse(segment);
    //try {
    //  let p = collect(document);
    //  promises.push(p);
    //} catch (err) {
    //  console.error(err);
    //}
  });
  return segments;
}

async function traverse(segment) {
  let promises = [];
  _traverse(segment);
  console.log("traverse segment", segment.id);
  let toReturn = await Promise.all(promises);
  return toReturn;

  function _traverse(segment) {
    console.log("_traverse segment", segment.id);
    //let p = removeMetadataNodes(segment);
    //promises.push(p);

    //if (segment.subsegments) {
    //  segment.subsegments.forEach(subsegment => {
    //    //console.log("SUBSEG", subsegment);
    //    let p = augment(subsegment);
    //    promises.push(p);
    //    _traverse(subsegment);
    //  });
    //}
  }
}

function removeMetadataNodes(nodeWithMetadata) {
  if (Array.isArray(nodeWithMetadata)) {
    let subsegments = nodeWithMetadata;
    console.log("subsegments", subsegments);
    return subsegments.filter(subseg => {
      return (subseg.name !== 'LambdaCostradamus' && subseg.name !== 'DynamoDBCostradamus' && subseg.name !== 'KinesisCostradamus');
    });
  } else {
    return {};
  }
}

module.exports = prune;
