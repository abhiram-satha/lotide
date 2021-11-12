const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', function () {
  it('comparing variables cd & dc should return true', function() {
    const actual = eqObjects(cd, dc);
    console.log(actual);
    const expected = true;

    assert.strictEqual(actual, expected);
  })
  it('comparing variables cd & cd2 should return false', function() {
    const actual = eqObjects(cd, cd2);
    
    assert.isFalse(actual);
  })
})






const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
