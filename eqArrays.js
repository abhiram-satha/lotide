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

module.exports = eqArrays;


