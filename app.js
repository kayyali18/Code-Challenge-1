class Dice {
  constructor(numDice, numSides, result) {
    this.numDice = numDice;
    this.numSides = numSides;
    this.result = result;
    this.answer = [];
    this.error();
    this.diceArray = [];
  }


  createDieNames() {
    for (var i = 1; i <= this.numDice; i++) {
      var newDieName = ("dice" + i);
      newDieName = {name: i, sides: this.numSides, rolled: false};
      this.diceArray.push(newDieName);
    }
    console.log(this.diceArray);
  }

  // makeDice() {
  //   for (var i = 0; i < this.numDice; i++) {
  //     var dice+i
  //   }
  // }






  error() {
    if (this.numDice < 1) return ('Please enter a valid dice number');
    else if (this.numSides < 4) return ('Please grab a bigger die ');

  }
}

var dice = new Dice(2, 6, 10);

dice.createDieNames()


module.exports = Dice;
