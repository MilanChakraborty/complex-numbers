const getSign = function(number) {
  return number < 0 ? "-" : "+";
}

const complexNum = function(real, imaginary) {

  const getRealPart = function() {
    return real;
  }

  const getImaginaryPart = function() {
    return imaginary;
  }

  const add = function(augend) {
    const sumOfReal = real + augend.getRealPart();
    const sumOfImaginary = imaginary + augend.getImaginaryPart();

    return complexNum(sumOfReal, sumOfImaginary);
  }

  const multiply = function(multiplier) {
    const a = real;
    const b = imaginary;
    const c = multiplier.getRealPart();
    const d = multiplier.getImaginaryPart();

    const productOfReal = ( a * c ) - ( b * d );
    const productOfImaginary = ( a * d ) + ( b * c );

    return complexNum(productOfReal, productOfImaginary);
  }

  const toString = function() {
    const sign = getSign(imaginary);
    const imaginaryAbs = Math.abs(imaginary);

    if(imaginary === 0) return `${real}`;
    if(real === 0) return `${imaginary}i`;

    return `${real} ${sign} ${imaginaryAbs}i`;
  }

  return { getRealPart, getImaginaryPart, add, multiply, toString };
}

exports.complexNum = complexNum;
