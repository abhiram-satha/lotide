# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @abhiram-satha/lotide`

**Require it:**

`const _ = require('@abhiram-satha/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * `head(array)`: returns the first element of an array
  * `tail(array)`: returns all the elements after the first element
  * `middle(array)`: returns the elements located in the middle of an array
  * `eqArrays(array1, array2)`: returns true is the elements of 2 arrays are equal and returns false if opposite
  * `assertEqual(actual, expected)`: compares 2 elements and returns true if they are equal and false if they are not
  * `assertArraysEqual(array1, array2)`: returns true is the elements of 2 arrays are equal and returns false if opposite
  * `flatten(array)`: Flattens out array of arrays into a single array
  * `countOnly(allItems, itemsToCount)`: counts only the true items listed in the second argument
  * `findKeyByValue(object, value)`: Returns the key for the provided value within an object
  * `takeUntil(array, callback)`: Splices an array until until the criteria set by callback function is met
  * `countLetters(sentence)`: Provides an object with the characters and the amount of times the characters appeared in the sentence
  * `without(source, itemsToRemove)`: Takes two arrays as an argument, and returns the unique items from the first array argument
  * `eqObjects(object1, object2)`: compares two objects, and returns true if the key-values match, and false is they do not
  * `findKey(object, callback)`: Returns the first key based on the callback function matches the value in an object
  * `letterPositions(sentence)`: provides an object of arrays, listing the index of the characters based in the function argument
  * `map(array, callback)`: produces a new array based on the parameters set in the callback function, based as a second parameter

