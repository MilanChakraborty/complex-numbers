const getSign = function(number) {
  return number < 0 ? "-" : "+";
}

const makeComplexNum = function({realPart, imaginaryPart}) {

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
    const a = realPart;
    const b = imaginaryPart;
    const { realPart: c, imaginaryPart: d } = secNum;

    product.realPart = ( a * c ) - ( b * d );
    product.imaginaryPart = ( a * d ) + ( b * c );

    return product;
  }

  const showNumber = function() {
    if(imaginaryPart === 0) return `${realPart}`;

    if(realPart === 0) return `${imaginaryPart}i`;

    return `${realPart} ${getSign(imaginaryPart)} ${Math.abs(imaginaryPart)}i`;
  }

  return { getRealPart, getImaginaryPart, add, multiply, showNumber };
}

exports.makeComplexNum = makeComplexNum;
