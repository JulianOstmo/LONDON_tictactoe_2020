class Board {
  constructor() {
    this.cells = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  }

  placesThePinOnPosition(pin, position) {
    this.cells[position] = pin;
  }

  // hasVerticalWinner() {
  //   const leftColumn = [0, 3, 6];

  //   return leftColumn.every((position) => {
      
  //   })
  // };

  showsTheBoardAsASCII() {
    return `${this.cells[0]}|${this.cells[1]}|${this.cells[2]}\n-+-+-\n${this.cells[3]}|${this.cells[4]}|${this.cells[5]}\n-+-+-\n${this.cells[6]}|${this.cells[7]}|${this.cells[8]}\n`;
  }

  announceTheWinner() {
    // yelling the player X won the game in a vertical move
    // >>> 1.state of the game
    // >>> 2.rules engine to understand if AFTER a move the game is over.
    return "X"
  }
}

module.exports = Board;
