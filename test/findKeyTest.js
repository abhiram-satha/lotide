const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', function(){
  it('the trial factor should return noma', function() {
    const actual = findKey(trial, x => x.stars === 2);
    const expected = 'noma';

    assert.strictEqual(actual, expected);
  })
})




const trial = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}// => "noma"