const findKey = function (object , callback) {
  for (star in object) {
      if (callback(object[star])) {      
      return star;
      }
  }
}

module.exports = findKey;




