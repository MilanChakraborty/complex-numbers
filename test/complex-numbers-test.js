const {describe, it} = require('node:test');
const {deepStrictEqual} = require('assert');

const { makeComplexNum } = require('../src/complex-numbers.js');

describe("Testing for get real Part", function() {

  it("Should give zero when the real part is 0", function() {
    let complexNum = makeComplexNum({realPart: 0, imaginaryPart: 2}); 
    let actual = complexNum.getRealPart();
    let expected = 0; 
    deepStrictEqual(actual, expected);
  });

  it("Should give the number when real part is negative", function() {
    complexNum = makeComplexNum({realPart: 1, imaginaryPart: 3})
    actual = complexNum.getRealPart();
    expected = 1;
    deepStrictEqual(actual, expected);
  });
});


describe("Testing for get imaginary Part", function() {

  it("Should give zero when the imaginary part is 0i", function() {
    complexNum = makeComplexNum({realPart: 2, imaginaryPart: 0})
    actual = complexNum.getImaginaryPart();
    expected = 0;
    deepStrictEqual(actual, expected);
  });

  it("Should give 3 when  the imaginary part is 3i", function() {
    complexNum = makeComplexNum({realPart: 2, imaginaryPart: 1})
    actual = complexNum.getImaginaryPart();
    expected = 1;
    deepStrictEqual(actual, expected);
  });
});

describe("Testing for addition of complex numbers", function() {

  it("Should give 0 when both the complex numbers has real parts and imaginary parts 0", function() {
    complexNum = makeComplexNum({realPart: 0, imaginaryPart: 0})
    actual = complexNum.add({realPart: 0, imaginaryPart: 0});
    expected = {realPart: 0, imaginaryPart: 0};
    deepStrictEqual(actual, expected);
  });

  it("Should give summation of realparts and imaginary parts as resultant imaginary number", function() {
    complexNum = makeComplexNum({realPart: 2, imaginaryPart: 1})
    actual = complexNum.add({realPart: 5, imaginaryPart: 6});
    expected = {realPart: 7, imaginaryPart: 7};
    deepStrictEqual(actual, expected);
  });
});

describe("Testing for multiplication of complex numbers", function() {

  it("Should give 0 when real and imaginary parts of both complex numbers is zero", function() {
    complexNum = makeComplexNum({realPart: 0, imaginaryPart: 0})
    actual = complexNum.multiply({realPart: 0, imaginaryPart: 0});
    expected = {realPart: 0, imaginaryPart: 0};
    deepStrictEqual(actual, expected);
  });

  it("Should give -4 as realPart and 7 as imaginaryPart when numbers are 2 + 3i and 1 + 2i", function() {
    complexNum = makeComplexNum({realPart: 2, imaginaryPart: 3})
    actual = complexNum.multiply({realPart: 1, imaginaryPart: 2});
    expected = {realPart: -4, imaginaryPart: 7};
    deepStrictEqual(actual, expected);
  });
});

describe("Testing for display complex numbers", function() {

  it("Should show both the parts when both the parts are not zero", function() {
    complexNum = makeComplexNum({realPart: 1, imaginaryPart: 2})
    actual = complexNum.showNumber();
    expected = '1 + 2i';
    deepStrictEqual(actual, expected);
  });

  it("Should give the sign as negative when imaginary number is negative", function() {
    complexNum = makeComplexNum({realPart: 1, imaginaryPart: -2})
    actual = complexNum.showNumber();
    expected = '1 - 2i';
    deepStrictEqual(actual, expected);
  });

  it("Should show only the imaginary part when the real part is 0", function() {
    complexNum = makeComplexNum({realPart: 0, imaginaryPart: 2})
    actual = complexNum.showNumber();
    expected = '2i';
    deepStrictEqual(actual, expected);
  });

  it("Should show only the real part when the imaginary part is 0", function() {
    complexNum = makeComplexNum({realPart: 2, imaginaryPart: 0})
    actual = complexNum.showNumber();
    expected = '2';
    deepStrictEqual(actual, expected);
  });

  it("Should give the number starting with - when the real part is negative", function() {
    complexNum = makeComplexNum({realPart: -2, imaginaryPart: 3})
    actual = complexNum.showNumber();
    expected = '-2 + 3i';
    deepStrictEqual(actual, expected);
  });

});
