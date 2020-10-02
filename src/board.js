class Board {
  constructor() {
    this.cells = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  }

  placesThePinOnPosition(pin, position) {
    this.cells[position] = pin;
  }

  showsTheBoardAsASCII() {
    return `${this.cells[0]}|${this.cells[1]}|${this.cells[2]}\n-+-+-\n${this.cells[3]}|${this.cells[4]}|${this.cells[5]}\n-+-+-\n${this.cells[6]}|${this.cells[7]}|${this.cells[8]}\n`;
  }
}

module.exports = Board;
