'use strict';

const reader = require('../lib/reader.js');

describe('Reader Module', () => {

  it('when given a bad file, returns an error', (done) => {

    let file = `${__dirname}/../../data/bad.txt`;

    reader(file, (err) => {
      expect(err).toBeDefined();
    });
    done();
  });

  it('when given a real file, returns the contents', (done) => {
    let file = `lab-03-josh/data/bananas.txt`;
    reader(file, (err, data) => {
      expect(typeof data).toBe('string');
    });
    done();
  });

  it('when given an array of files, returns the contents', (done) => {
    let paths = [`lab-03-josh/data/apples.txt`, `lab-03-josh/data/bananas.txt`];
    let path = '';
    paths.forEach((ele) => {

      path = ele.toString();
      reader(path, (err, data) => {
        expect(typeof data).toBe('string');
        // console.log(data);
        done();
      });
    });
  });

  it('when given an array of files, returns the contents in an array', (done) => {
    let paths = [`lab-03-josh/data/apples.txt`, `lab-03-josh/data/bananas.txt`];
    let path = '';
    let textArr = [];
    paths.forEach((ele) => {
      path = ele.toString();
      reader(path, (err, data) => {
        textArr.push(data);
        // console.log(textArr);
      });
    });
    expect(true).toBe(Array.isArray(textArr));
    done();
  });

  it('when given an array of files, returns the contents in order in an array regardless of size/time it takes', (done) => {
    let paths = [`lab-03-josh/data/cucumbers.txt`, `lab-03-josh/data/apples.txt`, `lab-03-josh/data/bananas.txt`];
    let path = '';
    let textArr = [];
    setTimeout(
      paths.forEach((ele) => {
        path = ele.toString();
        reader(path, (err, data) => {
          textArr.push(data);
          console.log(textArr);
          expect(textArr[0]).toContain('cucumbers');
        });
        done();
      }), 200);

  });

});