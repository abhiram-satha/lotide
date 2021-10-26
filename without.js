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

const without = function (source, itemsToRemove) {
  let uniqueItems = [];
  for (const sourceElement of source) { 
    if (!itemsToRemove.includes(sourceElement)) {
      uniqueItems.push(sourceElement);
    }
  }
  console.log(uniqueItems);
  return uniqueItems;
}


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["world"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

let arr1 = ["lighthouse" , "hello", "code"];

console.log(without(arr1, ["code" , "abc", "lighthouse"]));