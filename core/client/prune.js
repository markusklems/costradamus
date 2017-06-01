'use strict';

const util = require('util');
const fs = require('fs');

function prune(data) {
  data.Segments.forEach(segment => {
    pruneTraversal(segment.Document);
  });
  return data;
}

function pruneTraversal(node) {
  getNodesWithoutMetadata(node);
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
  }
}


module.exports = prune;
