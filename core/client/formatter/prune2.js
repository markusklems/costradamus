'use strict';

const readFromJsonFile = require('./file-operations.js').readFromJsonFile;
const util = require('util');

let a = prune('./1-59301069-2ff295fcdc556b9dbee93a9a-augmented.json');
console.log(util.inspect(a, false, null));


function prune(path) {
  let data = readFromJsonFile(path);
  let toReturn = Object.assign({}, data.Traces[0]);
  let prunedSegments = [];
  data.Traces[0].Segments.forEach(segment => {
    //console.log("segment.id", segment.id);
    prunedSegments.push(pruneTraversal({}, segment));
  });
  toReturn.segments = prunedSegments;
  return toReturn;
}

function pruneTraversal(toReturn, segment) {
  Object.assign(toReturn, getNodesWithoutMetadata(segment));
  //console.log("toReturn", toReturn);
  if (segment.subsegments) {
    segment.subsegments.forEach(subseg => {
      pruneTraversal(toReturn, subseg);
    });
  } else {
    return toReturn;
  }
}

function getNodesWithoutMetadata(s) {
  let toReturn = Object.assign({}, s);
  if (!s) {
    return {
      'i am': 'undefined'
    };
  }
  if (s.subsegments) {
    toReturn.subsegments = s.subsegments.filter(subseg => {
      return (subseg.name !== 'LambdaCostradamus' && subseg.name !== 'DynamoDBCostradamus' && subseg.name !== 'KinesisCostradamus');
    });
  } else if (toReturn.name === 'LambdaCostradamus' || toReturn.name === 'DynamoDBCostradamus' || toReturn.name === 'KinesisCostradamus') {
    return {
      'delete': 'me'
    };
  }
  //console.log(toReturn);
  return toReturn;
}

//if (Array.isArray(nodeWithMetadata)) {
//  let subsegments = nodeWithMetadata;
//  console.log("subsegments", subsegments);
//  return subsegments.filter(subseg => {
//    return (subseg.name !== 'LambdaCostradamus' && subseg.name !== 'DynamoDBCostradamus' && subseg.name !== //'KinesisCostradamus');
//  });
//} else {
//  return {};
//}
//}

module.exports = prune;
