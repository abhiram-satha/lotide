const countLetters = function (sentence) {
  const lowerSentence = sentence.toLowerCase();
  let numOfLetters = {};
    for (const letter of lowerSentence) {
      if (letter === " ") {
      } else if (numOfLetters[letter]) {
          numOfLetters[letter] += 1
      } else {
      numOfLetters[letter] = 1;
      }
    }

     return numOfLetters;
}

module.exports = countLetters;

countLetters("Lighthouse in the house");