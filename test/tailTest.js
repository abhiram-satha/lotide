const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('if tail(["Hello", "Lighthouse", "Labs"] should return ["Lighthouse", "Labs"]', () => {
    const actual = tail(["Hello", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"];

    assert.deepEqual(actual, expected);
  })
  it('if tail([1,2,3,4] should return [2,3,4]', () => {
    const actual = tail([1,2,3,4]);
    const expected = [2,3,4];

    assert.deepEqual(actual, expected);
  })
  it('if tail([1,11,2,3]) should return [11,2,3]', () => {
    const actual = tail([1,11,2,3]);
    const expected = [11,2,3];

    assert.deepEqual(actual, expected);
  })
})

