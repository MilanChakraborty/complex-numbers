const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');

const { complexNumber } = require('./complex-numbers.js');

describe("Testing for get real Part", function() {

  it("Should give zero when the real part is 0", function() {
    let complexNum = complexNumber({realPart: 0, imaginaryPart: 2}); 
    let actual = complexNum.getRealPart();
    let expected = 0; 
    deepStrictEqual(actual, expected);
  });

  it("Should give the number when real part is negative", function() {
    complexNum = complexNumber({realPart: 1, imaginaryPart: 3})
    actual = complexNum.getRealPart();
    expected = 1;
    deepStrictEqual(actual, expected);
  });
});


describe("Testing for get imaginary Part", function() {

  it("Should give zero when the imaginary part is 0i", function() {
    complexNum = complexNumber({realPart: 2, imaginaryPart: 0})
    actual = complexNum.getImaginaryPart();
    expected = 0;
    deepStrictEqual(actual, expected);
  });

  it("Should give 3 when  the imaginary part is 3i", function() {
    complexNum = complexNumber({realPart: 2, imaginaryPart: 1})
    actual = complexNum.getImaginaryPart();
    expected = 1;
    deepStrictEqual(actual, expected);
  });
});

describe("Testing for addition of complex numbers", function() {

  it("Should give 0 when both the complex numbers has real parts and imaginary parts 0", function() {
    complexNum = complexNumber({realPart: 0, imaginaryPart: 0})
    actual = complexNum.add({realPart: 0, imaginaryPart: 0});
    expected = {realPart: 0, imaginaryPart: 0};
    deepStrictEqual(actual, expected);
  });

  it("Should give summation of realparts and imaginary parts as resultant imaginary number", function() {
    complexNum = complexNumber({realPart: 2, imaginaryPart: 1})
    actual = complexNum.add({realPart: 5, imaginaryPart: 6});
    expected = {realPart: 7, imaginaryPart: 7};
    deepStrictEqual(actual, expected);
  });
});
