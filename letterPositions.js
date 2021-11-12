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
   return results;
}

module.exports = letterPositions;



