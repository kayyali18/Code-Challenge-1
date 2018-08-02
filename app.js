class Dice {
  constructor(numDice, numSides, result) {
    this.numDice = numDice;
    this.numSides = numSides;
    this.result = result;
    this.answer = [];
    this.dice =
              { rolled: false
              }
    this.error();


  }

  makeDice() {
    for (var i = 0; i < this.numDice; i++) {
      var dice+i
    }
  }






  error() {
    if (this.numDice < 1) return ('Please enter a valid dice number');
    else if (this.numSides < 4) return ('Please grab a bigger die ');

  }
}

var dice1 = new Dice(1, 4, 2);

dice1.makeDice();

module.exports = Dice;
