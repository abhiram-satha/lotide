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


const eqArrays = function (arr1 , arr2) {
  let result = true;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(false);
      return result = false;
    } else {
      continue;
    }
  }
  console.log(result);
  return result; 
}

const without = function (arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) { 
      if (arr1[i] !== arr2[i]) {
        if (arr1[i] !== arr2[arr2.length - 1]) {
          newArr.push(arr1[i]);
        } else {
          continue;
        }
      }
      else {
        continue;
      }
  }
  console.log(newArr);
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);