const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback === true) {
      array.slice(0, i)
    }
  }
}





//if  callback is false, take i of array
//return a new array 