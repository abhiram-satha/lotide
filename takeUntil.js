const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      //console.log(i);
      const array2 = array.slice(0, i)
      return array2;
    } 
  }
  return array2 = [];

}

module.exports = takeUntil;

// const assertArraysEqual = function (arr1 , arr2) {
//   let result = true;

//   for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
//       return result = false;
//     } else {
//       continue;
//     }
//   }
//   console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   return result; 
// }



// if  callback is false, take i of array
// return a new array 