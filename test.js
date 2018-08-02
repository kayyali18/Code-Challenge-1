var assert = require('chai').assert;
var Dice = require('./app.js');

describe('Dice', () => {

  it('should be a function', () => {
    assert.isFunction(Dice);
  })

  it('should reject less than 1 dice', () => {
    var dice = new Dice(0, 1, 3);
    assert.equal(dice.error(), 'Please enter a valid dice number')
  })

  it('should reject less than 4 sided dice', () => {
    var dice = new Dice(1, 1, 3);
    assert.equal(dice.error(), 'Please grab a bigger die ')
  })

})
