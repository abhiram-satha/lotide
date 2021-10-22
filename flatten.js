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


const flatten = function (arr) {
  const newArr = [];
  if (Array.isArray(arr) === true) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) === true) {
        for (let j = 0; j < arr[i].length; j++) {
          newArr.push(arr[i][j]);
        }
      }
      else {
        newArr.push(arr[i]);
      }
    }
  }
  console.log(newArr);
}

flatten([1, 2, [3, 4], 5, [6]]);
flatten(["hi", [5,6,3,4,5]]);
