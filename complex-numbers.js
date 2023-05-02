const complexNumber = function({realPart, imaginaryPart}) {

  const getRealPart = function() {
    return realPart;
  }

  const getImaginaryPart = function() {
    return imaginaryPart;
  }

  const add = function(secondNumber) {
    const sum = {realPart: 0, imaginaryPart: 0};
    sum.realPart = realPart + secondNumber.realPart;
    sum.imaginaryPart = imaginaryPart + secondNumber.imaginaryPart;

    return sum;
  }

  return { getRealPart, getImaginaryPart, add };
}

exports.complexNumber = complexNumber;
