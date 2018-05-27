module.exports = function () {

  return{

    files: ['lab-03-josh/lib/**/*.js'],
    
    tests: ['lab-03-josh/__test__/**/*.test.js'],
    
    env: {
      type: 'node',
    },
    
    testFramework: 'jest',

  };
};