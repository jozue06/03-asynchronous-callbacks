'use strict';

const fs = require('fs');

module.exports = exports = (file, callback) => {
  fs.readFile(file, (err, data) => {
    if(err) { 
      callback(err); 
    }
    else { 
      callback(undefined, data.toString().trim());
    }
    
  });
};