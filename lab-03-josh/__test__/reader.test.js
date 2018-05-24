'use strict';

const reader= require('../lib/reader.js');

describe('Reader Module', () => {

  it('when given a bad file, returns an error', (done) => {

    let file = `${__dirname}/../../data/bad.txt`;

    reader(file, (err) => {
      expect(err).toBeDefined();
    });
    done();
  });
  
  it('when given a real file, returns the contents', (done) => {
    let file = `lab-03-josh/data/bananas.txt`;//?
    reader(file, (err,data) => {
      console.log(err);
      console.log(data);
      expect(typeof data).toBe('string');//?
     
      done();
    });
  });

});
  

