const assertEqual = function(actual , expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function (sentence) {
  let lowerSentence = sentence.toLowerCase();
  let numOfLetters = {};
    for (const letter of lowerSentence) {
      if (letter === " ") {
        continue;
      } else if (numOfLetters[letter]) {
          numOfLetters[letter] += 1
      } else {
      numOfLetters[letter] = 1;
      }
    }

    console.log(numOfLetters);
  return numOfLetters;
}

countLetters("Lighthouse in the house");