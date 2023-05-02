const complexNumber = function() {

  const tokenizeNumber = function(number) {
    const numberTokens = number.split(" ");
    const realPart = +numberTokens[0];
    const operator = numberTokens[1];
    const imaginaryPart = +(numberTokens[2].slice(0, -1));

    return { realPart, operator, imaginaryPart }; 
  }

  const getRealPart = function(number) {
    const { realPart } = tokenizeNumber(number);
    return realPart;
  }

  const getImaginaryPart = function(number) {
    const { imaginaryPart } = tokenizeNumber(number);
    return imaginaryPart;
  }

  return { getRealPart, getImaginaryPart };
}

exports.complexNumber = complexNumber;
