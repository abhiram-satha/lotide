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
  return newArr;
}

module.exports = flatten;