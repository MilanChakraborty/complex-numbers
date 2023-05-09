class ComplexNumber {
  #real
  #imaginary

  constructor(real, imaginary) {
    this.#real = real;
    this.#imaginary = imaginary;
  }

  add(addend) {
    const real = this.#real + addend.#real;
    const imaginary = this.#imaginary + addend.#imaginary;

    return new ComplexNumber(real, imaginary);
  }

  multiply(multiplier) {
    const a = this.#real;
    const b = this.#imaginary;
    const c = multiplier.#real;
    const d = multiplier.#imaginary;

    const productOfReal = ( a * c ) - ( b * d );
    const productOfImaginary = ( a * d ) + ( b * c );

    return  new ComplexNumber(productOfReal, productOfImaginary);
  }

  #getSign(number) {
    return number >= 0 ? "+" : "-";
  }

  toString() {
    if(this.#imaginary === 0) return this.#real.toString();
    if(this.#real === 0) return `${this.#imaginary}i`;

    const sign = this.#getSign(this.#imaginary);
    const imaginaryAbs = Math.abs(this.#imaginary);

    return `${this.#real} ${sign} ${imaginaryAbs}i`;
  }
}

exports.ComplexNumber = ComplexNumber;
