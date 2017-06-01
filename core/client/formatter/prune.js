'use strict';

const readFromJsonFile = require('./file-operations.js').readFromJsonFile;
const util = require('util');
const fs = require('fs');

let a = prune('./1-59301069-2ff295fcdc556b9dbee93a9a-augmented.json');
console.log(util.inspect(a, false, null));


function prune(path) {
  let data = readFromJsonFile(path);
  data.Traces[0].Segments.forEach(segment => {
    //console.log("segment.id", segment.id);
    pruneTraversal(segment.Document);
  });
  fs.writeFileSync('./1-59301069-2ff295fcdc556b9dbee93a9a-pruned.json', JSON.stringify(data, null, 2));
  //return data;
}

function pruneTraversal(node) {
  //console.log("traversing");
  getNodesWithoutMetadata(node);
  //console.log("toReturn", toReturn);
  if (node.subsegments) {
    node.subsegments.forEach(subseg => {
      pruneTraversal(subseg);
    });
  } else {
    return node;
  }
}

function getNodesWithoutMetadata(node) {
  if (node.subsegments) {
    let prunedSubsegments = node.subsegments.filter(subseg => {
      return (subseg.name !== 'LambdaCostradamus' && subseg.name !== 'DynamoDBCostradamus' && subseg.name !== 'KinesisCostradamus');
    });
    node.subsegments = prunedSubsegments;
    //console.log("pruned");
  }
  //else if (node.name === 'LambdaCostradamus' || node.name === 'DynamoDBCostradamus' || node.name === //'KinesisCostradamus') {
  //  console.error("Why did this happen?");
  //} else {
  //  console.log("did nothing", node);
  //}
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
