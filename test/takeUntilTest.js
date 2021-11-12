const assert = require('chai').assert;
const takeUntil = require('../takeUntil');


describe('#takeUntil', () => {
  it('if takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5]) should return [ 1, 2, 5, 7, 2 ]', () => {
    const actual = takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0);
    const expected = [ 1, 2, 5, 7, 2 ];

    assert.deepEqual(actual, expected);
  })
})




