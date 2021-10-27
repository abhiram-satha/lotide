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
    console.log(result);
    return result;
};

const eqArrays = function (arr1 , arr2) {
  let result = true;
  let length = arr1.length;
  if (length < arr2.length) {
    length = arr2.length;
  }
  //console.log(length);
  for (var i = 0; i < length; i++) {
    if (arr1[i] !== arr2[i]) {
      // console.log(arr1[i])
      console.log(false);
      return result = false;
    } else {
      continue;
    }
  }
  console.log(result);
  return result; 
}


const assertObjectsEqual = function (actual , expected) {
  const inspect = require('util').inspect //importing a library to be used in the function

  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc);