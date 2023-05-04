const getSign = function(number) {
  return number < 0 ? "-" : "+";
}

const getRealPart = function() {
  return this.real;
}

const getImaginaryPart = function() {
  return this.imaginary;
}

const add = function(augend) {
  const sumOfReal = this.getRealPart() + augend.getRealPart();
  const sumOfImaginary = this.getImaginaryPart() + augend.getImaginaryPart();

  return complexNum(sumOfReal, sumOfImaginary);
}

const multiply = function(multiplier) {
  const a = this.getRealPart();
  const b = this.getImaginaryPart();
  const c = multiplier.getRealPart();
  const d = multiplier.getImaginaryPart();

  const productOfReal = ( a * c ) - ( b * d );
  const productOfImaginary = ( a * d ) + ( b * c );

  return complexNum(productOfReal, productOfImaginary);
}

const toString = function() {
  const imaginary = this.getImaginaryPart();
  const real = this.getRealPart();
  const sign = getSign(imaginary);
  const imaginaryAbs = Math.abs(imaginary);

  if(imaginary === 0) return `${real}`;
  if(real === 0) return `${imaginary}i`;

  return `${real} ${sign} ${imaginaryAbs}i`;
}


const complexNum = function(real, imaginary) {
  const parts = {real, imaginary}
  const complexNumber = {};

  complexNumber.getRealPart = getRealPart.bind(parts);
  complexNumber.getImaginaryPart = getImaginaryPart.bind(parts);
  complexNumber.toString = toString.bind(complexNumber);
  complexNumber.add = add.bind(complexNumber);
  complexNumber.multiply = multiply.bind(complexNumber);

  return complexNumber;
}

exports.complexNum = complexNum;
