'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = converter;
function converter(w, str) {
  var weight = w;
  var weightType = str.toLowerCase();
  var convertedWeight = 0;
  var pounds = 2.20462;
  var kilos = 0.453592;

  if (typeof weight === 'number') {
    if (weight >= 0) {
      if (weightType === 'kilograms' || weightType === 'kilos') {
        convertedWeight = weight * pounds;
      } else if (weightType === 'pounds') {
        convertedWeight = weight * kilos;
      } else {
        return console.log('You have to enter a valid measure:\n1. Kilograms\n2. Pounds');
      }
    } else {
      return console.log('You can not enter a negative value');
    }
  } else {
    return console.log('Sorry, the measure must be a number');
  }

  return parseFloat(convertedWeight.toFixed(5));
}