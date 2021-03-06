'use strict';

const fs = require('fs');

module.exports = exports = (paths, callback) => {
  let textArr = [];
  paths.forEach(file => {
    fs.readFile(file, (err, data) => {
      if (err) {
        callback(err);
      } else {
        textArr.push(data.toString().trim());
        if (textArr.length === paths.length) {
          callback(undefined, textArr);
        }
      }
    });
  });
};