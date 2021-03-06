const Board = require('../src/board');

describe('Game Board Creation', () => {
  it('expect the game board is created ', () => {
    const board = new Board();
    expect(board).toBeInstanceOf(Board);
  });

  it('expect the game board is initialised as an empty 3x3 playfield', () => {
    const board = new Board();
    expect(board.cells).toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });
});

describe('The Game Board is correctly rendered in an ASCII pretty print format', () => {
  it('expect the game board to be painted on the screen', () => {
    const board = new Board();
    expect(board.showsTheBoardAsASCII()).toBe(
      ' | | \n-+-+-\n | | \n-+-+-\n | | \n',
    );
  });

  it('expect the game board to have a single "X" placed in the upper left postition', () => {
    const board = new Board();

    board.placesThePinOnPosition('X', 0);
    expect(board.showsTheBoardAsASCII()).toBe(
      'X| | \n-+-+-\n | | \n-+-+-\n | | \n',
    );
  });
});
