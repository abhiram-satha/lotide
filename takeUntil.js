const takeUntil = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      const array2 = array.slice(0, i)
      return array2;
    } 
  }
  return array2 = [];

}

module.exports = takeUntil;
