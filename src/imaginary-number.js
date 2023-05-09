const {Real} = require('../src/real-number.js');

class Imaginary {
  #value;

  constructor(value) {
    this.#value = value;
  }

  add(addend) {
    const sum = this.#value.add(addend.#value);
    return new Imaginary(sum);
  }

  subtract(subtrahend) {
    const difference = this.#value.subtract(subtrahend.#value);
    return new Imaginary(difference);
  }

  multiply(multiplicand) {
    const minusOne = new Real(-1);
    return this.#value.multiply(multiplicand.#value).multiply(minusOne);
  }

  multiplyReal(multiplicand) {
    const product = this.#value.multiply(multiplicand);
    return new Imaginary(product);
  }

  areEqual(other) {
    return this.#value.areEqual(other.#value);
  }

  toString() {
    return `${this.#value}i`;
  }
}

exports.Imaginary = Imaginary;
