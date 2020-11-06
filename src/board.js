class Board {
  constructor() {
    this.cells = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    this.outcome = null;

    this.renderToConsole(this.showsTheBoardAsASCII());
  }

  placesThePinOnPosition(pin, position) {
    this.cells[position] = pin;
    this.validateBoard(pin);
    this.renderToConsole(this.showsTheBoardAsASCII());
  }

  showsTheBoardAsASCII() {
    const board = [
      `${this.cells[0]}|${this.cells[1]}|${this.cells[2]}`,
      `${this.cells[3]}|${this.cells[4]}|${this.cells[5]}`,
      `${this.cells[6]}|${this.cells[7]}|${this.cells[8]}`,
    ].join('\n-+-+-\n');

    const outcomeStatement = (() => {
      if (this.outcome === 'DRAW') {
        return 'The game was a draw!';
      }

      if (this.outcome) {
        return `Player ${this.outcome} has won`;
      }

      return '';
    })();

    return `${board}\n${outcomeStatement}`;
  }

  renderToConsole(payload) {
    console.log(payload);
  }

  validateBoard(pin) {
    const winStates = [
      [0, 4, 8], // LTR DIAG
      [2, 4, 6], // RTL DIAG
      [0, 1, 2], // TOP HOR
      [3, 4, 5], // MID HOR
      [6, 7, 8], // BOT HOR
      [0, 3, 6], // LEFT VERT
      [1, 4, 7], // MID VERT
      [2, 5, 8], // RIGHT VERT
    ];

    const hasWon = winStates.some((combination) =>
      [
        this.cells[combination[0]],
        this.cells[combination[1]],
        this.cells[combination[2]],
      ].every((cell) => cell === pin),
    );

    if (hasWon) {
      this.outcome = pin;
    }

    const isDraw = this.cells.every((cell) => cell !== ' ');

    if (isDraw) {
      this.outcome = 'DRAW';
    }
  }
}

module.exports = Board;
