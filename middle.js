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

const middle = function (arr1) {
  const middleValue = [];
  if (arr1.length < 3) {  
    console.log(middleValue)
    return middleValue;
  } else if (arr1.length % 2 !== 0) {
    middleValue.push(arr1[Math.floor(arr1.length / 2)]);
  } else {
    middleValue.push(arr1[arr1.length / 2 - 1]);
    middleValue.push(arr1[arr1.length / 2]);
  }
  console.log(middleValue)
  return middleValue;
}

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4, 5, 6, 7, 8]) // => 
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]