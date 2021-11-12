const assert = require('chai').assert;
const countOnly = require('../countOnly');
const assertEqual = require('../assertEqual');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const itemsToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

describe('#countOnly', () => {
  it('countOnly(Jason) should only return 1', () => {
    const actual = countOnly(firstNames, itemsToCount)
    const expected = { Fang: 2, Jason: 1 };

    assert.deepEqual(actual, expected);
  })
})