'use strict';

const fs = require('fs');

module.exports = exports = (paths, callback) => {
  fs.readFile(paths, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(undefined, data.toString().trim());
    }

  });
};