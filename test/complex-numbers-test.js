const {describe, it} = require("node:test");
const {strictEqual} = require("assert");

const { ComplexNumber } = require("../src/complex-numbers-using-classes.js");

let num1 = {};
let num2 = {};
let actual = "";
let expected = "";

describe("Testing for addition of complex numbers", function() {

  it("Should give 0 when both the complex numbers has real parts and imaginary parts 0", function() {
    num1 = new ComplexNumber(0, 0);
    num2 = new ComplexNumber(0, 0);
    actual = num1.add(num2).toString();
    expected = "0";

    strictEqual(actual, expected);
  });

  it("Should give summation of realparts and imaginary parts as resultant imaginary number", function() {
    num1 = new ComplexNumber(2, 1);
    num2 = new ComplexNumber(2, 3);
    actual = num1.add(num2).toString();
    expected = "4 + 4i";

    strictEqual(actual, expected);
  });
});

describe("Testing for multiplication of complex numbers", function() {

  it("Should give 0 when real and imaginary parts of both complex numbers is zero", function() {
    num1 = new ComplexNumber(0, 0);
    num2 = new ComplexNumber(0, 0);
    actual = num1.multiply(num2).toString();
    expected = "0";

    strictEqual(actual, expected);
  });

  it("Should give -4 as realPart and 7 as imaginaryPart when numbers are 2 + 3i and 1 + 2i", function() {
    num1 = new ComplexNumber(2, 3);
    num2 = new ComplexNumber(1, 2);
    actual = num1.multiply(num2).toString();
    expected = "-4 + 7i";

    strictEqual(actual, expected);
  });
});

describe("Testing for display complex numbers", function() {

  it("Should show both the parts when both the parts are not zero", function() {
    num1 = new ComplexNumber(1, 2);
    actual = num1.toString();
    expected = "1 + 2i";

    strictEqual(actual, expected);
  });

  it("Should give the sign as negative when imaginary number is negative", function() {
    num1 = new ComplexNumber(1, -2);
    actual = num1.toString();
    expected = "1 - 2i";

    strictEqual(actual, expected);
  });

  it("Should show only the imaginary part when the real part is 0", function() {
    num1 = new ComplexNumber(0, 2);
    actual = num1.toString();
    expected = "2i";

    strictEqual(actual, expected);
  });

  it("Should show only the real part when the imaginary part is 0", function() {
    num1 = new ComplexNumber(2, 0);
    actual = num1.toString();
    expected = "2";

    strictEqual(actual, expected);
  });

  it("Should give the number starting with - when the real part is negative", function() {
    num1 = new ComplexNumber(-2, 3);
    actual = num1.toString();
    expected = "-2 + 3i";

    strictEqual(actual, expected);
  });
});
