'use strict';

const fs = require('fs');
const path = require('path');

module.exports = (shouldThisBeTraced) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'config', 'toggles.json'), (err, data) => {
      if (err) {
        reject(err);
      } else {
        let toggles = JSON.parse(data.toString());
        if (toggles.tracing && toggles.tracing.find(i => i === shouldThisBeTraced)) {
          resolve(true);
        } else {
          resolve(false);
        }
      }
    });
  });
};
