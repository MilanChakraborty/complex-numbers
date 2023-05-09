const {describe, it} = require('node:test');
const {strictEqual, ok} = require('assert');
const {Imaginary} = require('../src/imaginary-number.js');
const {Real} = require('../src/real-number.js');

const two = new Real(2);
const minusTwo = new Real(-2);
const one = new Real(1);
const three = new Real(3);

describe('An imaginary number', function() {
  const imaginary = new Imaginary(two);
  const otherImaginary = new Imaginary(two);

  it('should be compared with another imaginary number', function() {
    ok(imaginary.areEqual(otherImaginary));
  });
});

describe('An imaginary number', function() {

  const addend = new Imaginary(two);
  const augend = new Imaginary(one);
  const sum = new Imaginary(three);

  it('should be added with another imaginary number', function() {
    ok(addend.add(augend).areEqual(sum));
  });
});

describe('An imaginary number', function() {

  const minuend = new Imaginary(two);
  const subtrahend = new Imaginary(one);
  const difference = new Imaginary(one);

  it('should be subtracted by another imaginary number', function() {
    ok(minuend.subtract(subtrahend).areEqual(difference));
  });
});

describe('An imaginary number ', function() {

  const multiplier = new Imaginary(two);
  const multiplicand = new Imaginary(one);
  const product = new Real(-2);

  it('should be multiplied should be multiplied with another imaginary number', function() {
    ok(multiplier.multiply(multiplicand).areEqual(product));
  });
});

describe('An imaginary number ', function() {

  const multiplier = new Imaginary(two);
  const multiplicand = new Real(1);
  const product = new Imaginary(two);

  it('should be multiplied should be multiplied with another real number', function() {
    ok(multiplier.multiplyReal(multiplicand).areEqual(product));
  });
});

describe('An imaginary number', function() {

  const imaginary = new Imaginary(two);

  it('should be rendered in standard format', function() {
    strictEqual(imaginary.toString(), '2i');
  });
});
