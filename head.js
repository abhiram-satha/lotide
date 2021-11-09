const assertEqual = require('./assertEqual');

const head = function (arr) {
  if (arr === []) {
    return undefined;
  }
  return first = arr.shift();
}


module.exports = head;


