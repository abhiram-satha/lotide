const eqArrays = function (arr1 , arr2) {
  if (arr1.length !== arr2.length) {
    return false; 
  }

  for(let i = 0; i < arr1.length; i++) {
    if(Array.isArray(arr1[i])) {
      for (let j = 0; j < arr1[i].length; j++) {
        if(arr1[i][j] !== arr2[i][j]) {
          return false;
        }
      }
    }
    else if (arr1[i] !== arr2[i]) {
      console.log(arr1[i], arr2[i])
      return false;
    }
  }
  
  return true; 
}

module.exports = eqArrays;


