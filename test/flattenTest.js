const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('flatten([1, 2, [3, 4], 5, [6]]) should return [1,2,3,4,5,6]', () => {
    const actual = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [1,2,3,4,5,6];

    assert.deepEqual(actual, expected);
  })
  it('flatten("hi") should return an empty array', () => {
    const actual = flatten(['hi']);
    const expected = ['hi'];

    assert.deepEqual(actual, expected);
  })
} )





// flatten([1, 2, [3, 4], 5, [6]]);
// flatten('hi');