const Board = require('../src/board');
// const Player = require('../src/player');

describe('Game Board Creation', () => {
  it('expect the game board is created ', () => {
    const board = new Board();
    expect(board).toBeInstanceOf(Board);
  });

  it('expect the game board is initialised as an empty 3x3 playfield', () => {
    const board = new Board();
    expect(board.cells).toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });

  it('expect the game board to be painted on the screen', () => {
    const board = new Board();
    expect(board.render()).toBe(' | | \n-+-+-\n | | \n-+-+-\n | | \n');
  });
});

describe('Player X paints the X pin on the board', () => {
    it('expect the game board to have a single "X" placed in the upper left postition', () => {
      const board = new Board();
      
      board.placePin("X", 0);
      expect(board.render()).toBe('X| | \n-+-+-\n | | \n-+-+-\n | | \n');
    });

  });
