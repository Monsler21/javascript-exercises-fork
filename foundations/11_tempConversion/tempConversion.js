const convertToCelsius = function(numF) {
  let conversionC = (numF - 32)/ 1.8;
  return Number(conversionC.toFixed(1));
};

const convertToFahrenheit = function(numC) {
  let conversionF = (numC * 1.8) + 32;
  return Number(conversionF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
