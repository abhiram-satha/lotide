const eqObjects = require('./eqObjects');

const assertObjectsEqual = function (actual , expected) {
  const inspect = require('util').inspect //importing a library to be used in the function

  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

module.exports = assertObjectsEqual;