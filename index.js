const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const flatten = require('./flatten');
const countOnly = require('./countOnly');
const findKeyByValue = require('./findKeyByValue');
const takeUntil = require('./takeUntil');


module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertEqual,
  assertArraysEqual,
  flatten,
  countOnly,
  findKeyByValue,
  takeUntil
};