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

describe('Vertical Victory', () => {
  it('Player X - Moves compliant with the rules to have a board with the player X won in vertical on the left side of it.', () => {
    const board = new Board();
    const playerX = new Player('X', board);
    const playerO = new Player('O', board);

    //   - X - top left
    playerX.placePin(0);
    //   - O - Middle
    playerO.placePin(4);
    //   - X - middle left
    playerX.placePin(3);
    //   - O - top middle
    playerO.placePin(1);
    //   - X - bottom left
    playerX.placePin(6);
    //   - X wins --> expect 
    expect(board.announceTheWinner()).toBe("X");
  });

  it('Player O - Moves compliant with the rules to have a board with the player O won in vertical on the left side of it.', () => {
    // - **BRUTE FORCE** Test scenario : Moves
    const board = new Board();
    const playerX = new Player('X', board);
    const playerO = new Player('O', board); // DRY!!!

    // - X - middle
    // - O - middle left
    // - X - top middle
    // - O - bottom left
    // - X - middle right
    // - 0 - top left
    // - O wins --> expect
    expect(board.announceTheWinner()).toBe("O");
  });
});
