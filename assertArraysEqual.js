const assertArraysEqual = function (arr1 , arr2) {
  let result = true;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
      return result = false;
    } else {
      continue;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  return result; 
}

module.exports = assertArraysEqual;


