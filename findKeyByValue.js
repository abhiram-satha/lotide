const findKeyByValue = function (object , answer){
  let result = " ";
  let array = Object.keys(object);
  for (let i = 0; i < array.length; i++) {
    if (answer === object[array[i]]) {
      result = array[i];
    } else {
      result = undefined;
    }
  }
  return result;
}


module.exports = findKeyByValue;
