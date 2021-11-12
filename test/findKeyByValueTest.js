const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


describe('#findKeyByValue', function() {
  it('The Wire should return drama', function() {
    const actual = findKeyByValue(bestTVShowsByGenre, 'The Wire');
    const expected = 'drama';

    assert.strictEqual(actual, expected);
  })
  it('That 70s show should return undefined', function () {
    const actual = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expected = undefined;

    assert.strictEqua;(actual, expected);
  })
})

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
