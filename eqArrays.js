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
  return result; 
}

module.exports = eqArrays;


