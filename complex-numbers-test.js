const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');

const { complexNumber } = require('./complex-numbers.js');

let actual = "";
let expected = "";

describe("Testing for get real Part", function() {
  const complexNum = complexNumber(); 

  it("Should give zero when the real part is 0, 0 + 2i", function() {
    actual = complexNum.getRealPart("0 + 2i");
    expected = 0; 
    deepStrictEqual(actual, expected);
  });

  it("Should give the number when real part is negative, 2 + 3i", function() {

    actual = complexNum.getRealPart("2 + 3i");
    expected = 2;
    deepStrictEqual(actual, expected);
  });
});


describe("Testing for get imaginary Part", function() {
  const complexNum = complexNumber(); 

  it("Should give zero when the imaginary part is 0i", function() {
    actual = complexNum.getImaginaryPart("2 + 0i");
    expected = 0;
    deepStrictEqual(actual, expected);
  });

  it("Should give 3 when  the imaginary part is 3i", function() {
    actual = complexNum.getImaginaryPart("2 + 3i");
    expected = 3;
    deepStrictEqual(actual, expected);
  });

});

