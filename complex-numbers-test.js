const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');

const { complexNumber } = require('./complex-numbers.js');

let actual = "";
let expected = "";

describe("Testing for complex number 2 + 3i", function() {
  const complexNum = complexNumber(); 

  it("Testing for get real Part", function() {
    actual = complexNum.getRealPart("2 + 3i");
    expected = 2; 
    deepStrictEqual(actual, expected);
  });

  it("Testing for get imaginary Part", function() {
    actual = complexNum.getImaginaryPart("2 + 3i");
    expected = 3;
    deepStrictEqual(actual, expected);
  });
});

