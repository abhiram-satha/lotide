// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  let objectKeys1 = Object.keys(object1);
  let objectKeys2 = Object.keys(object2);
  let result = true;

  if (objectKeys1.length !== objectKeys2.length) {
    return result = false;
  }
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
        
      } else if (object1[key] !== object2[key]) {
        return result = false;
      }
    }
    return result;
};

module.exports = eqObjects;
