const assert = require('chai').assert;
const map = require('../map');

describe('#map', function() {
  it('words with a call back function with (words , word => word[0]) should return ["g", "c", "t", "m", "t"]', function() {
    const words = ["ground", "control", "to", "major", "tom"];
    const actual = map(words, word => word[0]);
    const expected = ["g", "c", "t", "m", "t"];

    assert.deepEqual(actual, expected);
  })
})



