const assertEqual = function(actual , expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (arr1 , arr2) {
  let result = true;
  let length = arr1.length;
  if (length < arr2.length) {
    length = arr2.length;
  }
  for (var i = 0; i < length; i++) {
    
    if (arr1[i] !== arr2[i]) {
      return result = false;
    } else {
      continue;
    }
  }
  console.log(result);
  return result; 
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);; // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false