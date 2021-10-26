const assertEqual = function(actual , expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (arr1 , arr2) {
  let result = true;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(false);
      return result = false;
    } else {
      continue;
    }
  }
  console.log(result);
  return result; 
}

const letterPositions = function (sentence) {
  const results = {};
  const lowerSentence = sentence.toLowerCase();
  for (let i = 0; i < lowerSentence.length; i++) {
      if (lowerSentence[i] === " ") {
        continue;
      } else if (!results.hasOwnProperty(lowerSentence[i])) {
      results[lowerSentence[i]] = [];
      results[lowerSentence[i]].push(i);
    } else {
      results[lowerSentence[i]].push(i);
    }
  }


  console.log(results);
  return results;
}

const assertArraysEqual = function (arr1 , arr2) {
  let result = true;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
      return result = false;
    } else {
      continue;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  return result; 
}

const test = { 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}

assertArraysEqual(letterPositions("lighthouse in the house"), test)

