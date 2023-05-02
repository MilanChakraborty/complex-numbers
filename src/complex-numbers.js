const getProductOfRealPart = function(a, b, c, d) {
  return ( a * c ) - ( b * d );
}

const getProductOfImaginaryPart = function(a, b, c, d) {
  return ( a * d ) + ( b * c );
}

const complexNumber = function({realPart, imaginaryPart}) {

  const getRealPart = function() {
    return realPart;
  }

  const getImaginaryPart = function() {
    return imaginaryPart;
  }

  const add = function(secNum) {
    const sum = {realPart: 0, imaginaryPart: 0};
    sum.realPart = realPart + secNum.realPart;
    sum.imaginaryPart = imaginaryPart + secNum.imaginaryPart;

    return sum;
  }

  const multiply = function(secNum) {
    const product = {realPart: 1, imaginaryPart: 1}
    product.realPart = getProductOfRealPart(realPart, imaginaryPart, secNum.realPart, secNum.imaginaryPart);  
    product.imaginaryPart = getProductOfImaginaryPart(realPart, imaginaryPart, secNum.realPart, secNum.imaginaryPart);

    return product;
  }

  return { getRealPart, getImaginaryPart, add, multiply };
}

exports.complexNumber = complexNumber;
