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

module.exports = middle;

