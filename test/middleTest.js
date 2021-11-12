const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('middle([1]) should return []', () => {
    const actual = middle([1]);
    const expected = [];

    assert.deepEqual(actual, expected);
  })
  it('middle([1, 2, 3, 4, 5, 6, 7, 8] should return [4,5]', () => {
    const actual = middle([1, 2, 3, 4, 5, 6, 7, 8]);
    const expected = [4,5];

    assert.deepEqual(actual, expected);
  })
})

// assertArraysEqual(middle([1]), []) // => []
// assertArraysEqual(middle([1, 2]), []) // => []
// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]) // => [4, 5]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]