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
    let file = `lab-03-josh/data/bananas.txt`;
    reader(file, (err,data) => {
      expect(typeof data).toBe('string');
     
    });
    done();
  });

  it('when given an array of files, returns the contents', (done) => {
    let paths = [`lab-03-josh/data/apples.txt`,`lab-03-josh/data/bananas.txt` ];
    let path = '';
    paths.forEach( (ele) => {
      
      path = ele.toString();
      reader(path, (err,data) => {
        expect(typeof data).toBe('string');
        console.log(data);
        done();
      });
    });
 
   
  });
});
  

