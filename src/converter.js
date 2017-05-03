export default function converter(w, str) {
  let weight = w
  let weightType = str.toLowerCase()
  let convertedWeight = 0
  const pounds = 2.20462
  const kilos = 0.453592

  if (typeof weight === 'number') {
    if (weightType === 'kilograms') {
      convertedWeight = weight * pounds
    } else if (weightType === 'pounds') {
      convertedWeight = weight * kilos
    } else {
      return console.log('You have to enter a valid measure:\n1. Kilograms\n2. Pounds')
    }
  } else {
    return console.log('Sorry, the measure must be a number')
  }

  return parseFloat(convertedWeight.toFixed(5))
}