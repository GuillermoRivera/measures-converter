const expect = require('chai').expect
const converter = require('..').default

describe('#converter', function () {
  it('Measures must be a number', function () {
    const weight = converter(8, 'kilograms')
    expect(typeof weight).to.equal('number')
  })
  it('Measures can not be negatives', function () {
    const pounds = 3
    const weight = converter(pounds, 'pounds')
    expect(Math.sign(weight)).to.equal(1)
  })
  it('The type of measures can only be kilograms or pounds, nothing else', function () {
    const weightType = 'kilograms'
    const weight = converter(10, weightType)
    expect(weightType).to.equal('kilograms')
  })
})
