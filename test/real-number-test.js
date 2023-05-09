const {describe, it} = require('node:test');
const {strictEqual} = require('assert');
const {Real} = require('../src/real-number.js');

describe('A real number', function() {
  const real = new Real(2);
  const otherReal = new Real(1);
  const sum = new Real(3);

  it('should be added with another real number', function() {
    strictEqual(real.add(otherReal).areEqual(sum), true);
  });
});

describe('A real number', function() {
  const real = new Real(2);
  const otherReal = new Real(1);
  const difference = new Real(1);

  it('should be subtracted by another real number', function() {
    strictEqual(real.subtract(otherReal).areEqual(difference), true);
  });
})

describe('A real number', function() {
  const multiplicand = new Real(2);
  const multiplier = new Real(3);
  const product = new Real(6);

  it('should be multiplied with another real number', function() {
    strictEqual(multiplier.multiply(multiplicand).areEqual(product), true);
  });
});

describe('A real number', function() {
  const real = new Real(2);

  it('should be compared with another real number', function() {
    strictEqual(real.areEqual(real), true);
  });
});

describe('A real number', function() {
  const real = new Real(2);

  it('should be stringified', function() {
    strictEqual(real.toString(), '2');
  });
});

