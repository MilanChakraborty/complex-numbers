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
    const real = this.#real;
    const imaginary = this.#imaginary;
    const sign = this.#getSign(imaginary);
    const imaginaryAbs = Math.abs(imaginary);

    if(imaginary === 0) return `${real}`;
    if(real === 0) return `${imaginary}i`;

    return `${real} ${sign} ${imaginaryAbs}i`;
  }
}

exports.ComplexNumber = ComplexNumber;
