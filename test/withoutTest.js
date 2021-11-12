const assert = require('chai').assert
const without = require('../without');

describe('#without', function() {
  it('[1, 2, 3], [1] should return [2,3]', function() {
    const actual = without([1, 2, 3], [1]);
    const expected = [2, 3];

    assert.deepEqual(actual, expected);
  })
  it('["hello", "world", "lighthouse"], ["word"], should return ["hello" , "lighthouse"]', function() {
    const actual = without(["hello", "world", "lighthouse"], ["world"]);
    const expected = ['hello', 'lighthouse'];

    assert.deepEqual(actual, expected);
  } )
})
