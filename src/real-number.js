class Real {
  #value;

  constructor(value) {
    this.#value = value;
  }

  add(addend) {
    const sum = this.#value + addend.#value;
    return new Real(sum);
  }

  subtract(subtrahend) {
    const difference = this.#value - subtrahend.#value;
    return new Real(difference);
  }

  multiply(multiplicand) {
    const product = this.#value * multiplicand.#value;
    return new Real(product);
  }

  areEqual(other) {
    return this.#value === other.#value;
  }

  toString() {
    return `${this.#value}`
  }
}

exports.Real = Real;
