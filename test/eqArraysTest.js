const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', function() {
  it('eqArrays([1, 2, 3], [1, 2, 3]) should return true', function() {
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);

    assert.isTrue(actual);
  })
  it('eqArrays([1, 2, 3], [3, 2, 1]) should return false', function () {
    const actual = eqArrays([1, 2, 3], [3, 2, 1]);

    assert.isFalse(actual);
  })
})

