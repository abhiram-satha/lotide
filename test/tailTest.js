const assert = require('chai').assert;

const tail = require('../tail');
const assertEqual = require('../assertEqual');

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

// console.log(tail(["Hello", "Lighthouse", "Labs"]));

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);



// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); 


// assertEqual(tail(["Hello", "Lighthouse", "Labs"]).toString(), ["Lighthouse", "Labs"].toString());

// console.log(["Hi", '  hello'].toString());