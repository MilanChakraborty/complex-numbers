const {describe, it} = require('node:test');
const {ok} = require('assert');
const {Complex} = require('../src/complex-number.js');
const {Imaginary} = require('../src/imaginary-number.js');
const {Real} = require('../src/real-number.js');

const three = new Real(3);
const six = new Real(6);

describe('A complex number', function() {
  it('should be compared with another complex number', function() {

    const real = new Real(2);
    const imaginary = new Imaginary(three);
    const complex = new Complex(real, imaginary);

    ok(complex.areEqual(complex));
  });
});

describe('A complex number', function() {
  it('should be added with another complex number', function() {

    const real = new Real(2);
    const imaginary = new Imaginary(three);
    const complex = new Complex(real, imaginary);

    const realPartOfSum = new Real(4);
    const imaginaryPartOfSum = new Imaginary(six);
    const sum = new Complex(realPartOfSum, imaginaryPartOfSum);

    ok(complex.add(complex).areEqual(sum));
  });
});

