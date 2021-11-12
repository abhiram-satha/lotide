const tail = function(arr) {
  let y = [];
  if (arr.length === 0 || arr.length === 1) {
    return y;
  }
  return y = arr.slice(1 , arr.length);
};



module.exports = tail;