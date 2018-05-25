'use strict';

const reader = require('../lib/reader.js');

describe('Reader Module', () => {

  it('when given a bad file, returns an error', (done) => {
    let file = [`${__dirname}/../../data/bad.txt`];
    reader(file, (err) => {
      expect(err).toBeDefined();
    });
    done();
  });

  it('when given a real file, returns the contents', (done) => {
    let file = [`lab-03-josh/data/bananas.txt`];
    reader(file, (err, data) => {
      const returns = data.toString();
      expect(returns).toBe(data[0]);
    });
    done();
  });

  it('when given an array of files, returns the contents', (done) => {
    let paths = [`lab-03-josh/data/apples.txt`, `lab-03-josh/data/bananas.txt`];
    reader(paths, (err, data) => {
      const returns = data.toString();
      expect(typeof returns).toBe('string');
      done();
    });
  });


  it('when given an array of files, returns the contents in an array', (done) => {
    let paths = [`lab-03-josh/data/apples.txt`, `lab-03-josh/data/bananas.txt`];
    let textArr = [];
    reader(paths, (err, data) => {
      textArr.push(data);
    });
    expect(true).toBe(Array.isArray(textArr));
    done();
  });

  it('when given an array of files, returns the contents in order in an array regardless of size/time it takes', (done) => {
    let paths = [`lab-03-josh/data/cucumbers.txt`, `lab-03-josh/data/apples.txt`, `lab-03-josh/data/bananas.txt`];
    let textArr = [];
    setTimeout(
      reader(paths, (err, data) => {
        textArr.push(data.toString());
        expect(textArr[0]).toContain('cucumbers');
      }),200); 
    done();
  });

  it('when given an array of files, returns error from bad path in array', (done) => {
    let paths = [`lab-03-josh/data/cucumbssrs.txt`, `lab-03-josh/data/apples.txt`, `lab-03-josh/data/bananas.txt`];
    let textArr = [];
    reader(paths, (err, data) => {
      textArr.push(data);
      expect(err).not.toBeUndefined();
    });
    done();
  });


});