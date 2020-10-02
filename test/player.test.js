const Player = require('../src/player');
const Board = require('../src/board');

describe('Player creation', () => {
  it('expect player X is created with a X as pin', () => {
    const expectedPlayerXPin = 'X';
    const playerX = new Player('X');
    expect(playerX).toBeInstanceOf(Player);
    expect(playerX.pin).toEqual(expectedPlayerXPin);
  });
  it('expect player O is created with a O as pin', () => {
    const expectedPlayerOPin = 'O';
    const playerO = new Player('O');
    expect(playerO).toBeInstanceOf(Player);
    expect(playerO.pin).toEqual(expectedPlayerOPin);
  });
  it('expect player X is created with a new Board', () => {
    const board = new Board();
    const playerX = new Player('X', board);
    expect(playerX.board).toBeInstanceOf(Board);
  });
});

describe('Player places pin', () => {
  test('expect player "X" to place an X in the upper left postition', () => {
    const board = new Board();
    const playerX = new Player('X', board);
    playerX.placePin(0);
    expect(playerX.board.showsTheBoardAsASCII()).toBe('X| | \n-+-+-\n | | \n-+-+-\n | | \n');
  });
});
