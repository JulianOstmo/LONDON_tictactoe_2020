class Player {
  constructor(pin, board) {
    this.pin = pin;
    this.board = board;
  }

  placePin(position) {
    this.board.placesThePinOnPosition(this.pin, position);
  }
}

module.exports = Player;
