const assertEqual = function(actual , expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const findKey = function (object , callback) {
  for (star in object) {
    console.log(object);
    //for (rating in object[star]) {
      //console.log(object[star][rating]);
      //console.log(callback(object[star]));
      if (callback(object[star])) {      //console.log(object[star][rating]);
        // console.log(object)
        // console.log("------")
      //key = Object.keys(object);
      return star;
      }
        
        
    //}
    
  }
  //return key;
}




const trial = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(trial);