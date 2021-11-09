const assert = require('chai').assert;
const head = require('../head');
const assertEqual = require('../assertEqual');

describe('#head', function() {
  it('returns  1 for [1,2,3]', function () {
    const actual = head([1,2,3]);
    const expected = 1;

    assert.strictEqual(actual, expected);
  })
  it('returns "5" for ["5"]', () => {
    const actual = head(['5']);
    const expected = '5';
    assert.strictEqual(actual, expected);
  })
  it('returns "Hello" for "["Hello", "Lighthouse", "Labs"]', ()=> {
    const actual = head(["Hello", "Lighthouse", "Labs"]);
    const expected = "Hello";

    assert.strictEqual(actual, expected);
  })
})
