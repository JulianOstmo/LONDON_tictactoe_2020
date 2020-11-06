const Player = require('../src/player');
const Board = require('../src/board');
const EMPTY_BOARD = require("./testDoubles/EMPTY_BOARD");

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
    expect(playerX.board.showsTheBoardAsASCII()).toBe(
      'X| | \n-+-+-\n | | \n-+-+-\n | | \n',
    );
  });
});

describe('Vertical Victory', () => {
  it('Player X - Places pin X on top left space', () => {
    const board = new Board();
    const playerX = new Player('X', board);

    playerX.placePin(0);
    expect(board.cells).toEqual(['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });

  it('Player O - Places pin O in center space', () => {
    const board = new Board();
    const playerX = new Player('X', board);
    const playerO = new Player('O', board);

    playerX.placePin(0);
    playerO.placePin(4);
    expect(board.cells).toEqual(['X', ' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ']);
  });

  it('Player X - Moves compliant with the rules to have a board with the player X won in vertical on the left side of it.', () => {
    const board = new Board();
    const playerX = new Player('X', board);
    const playerO = new Player('O', board);

    playerX.placePin(0);
    playerO.placePin(4);
    playerX.placePin(3);
    playerO.placePin(1);
    playerX.placePin(6);
    expect(board.cells).toEqual(['X', 'O', ' ', 'X', 'O', ' ', 'X', ' ', ' ']);
    expect(board.announceTheWinner()).toBe('X');
  });

  describe('Moves compliant with the rules to get a game outcome', () => {
    let playerX;
    let playerO;
    let board;

    beforeEach(() => {
      board = new Board();
      playerX = new Player('X', board);
      playerO = new Player('O', board);
    });

    it('player O wins with a Diagonal Victory', () => {
      playerX.placePin(0);
      playerO.placePin(2);
      playerX.placePin(1);
      playerO.placePin(4);
      playerX.placePin(3);
      playerO.placePin(6);
      expect(board.cells).toEqual([
        'X',
        'X',
        'O',
        'X',
        'O',
        ' ',
        'O',
        ' ',
        ' ',
      ]);
      expect(board.announceTheWinner()).toBe('O');
    });

    it.skip('player X places pin on top left', () => {
      playerX.placePin(0);
      expect(board.cells).toEqual([
        'X',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
      ]);
      expect(board.announceTheWinner()).toBe('No winner');
    });

    it('player X wins with an horizontal top line', () => {
      playerX.placePin(0);
      playerO.placePin(4);
      playerX.placePin(1);
      playerO.placePin(6);
      playerX.placePin(2);
      expect(board.cells).toEqual([
        'X',
        'X',
        'X',
        ' ',
        'O',
        ' ',
        'O',
        ' ',
        ' ',
      ]);
      expect(board.announceTheWinner()).toBe('X');
    });
  });
});

describe('When a move is made, it should be shown to the user', () => {
  const mockConsole = jest.spyOn(global.console, 'log');
  mockConsole.mockImplementation((val) => val);
  
  // const mockConsole = jest.fn((val) => val);
  // global.console.log = mockConsole;

  beforeEach(() => {
    mockConsole.mockClear();
  });

  it('expect the user to see an empty board at the start of the game', () => {
    const board = new Board();
    
    board.renderToConsole(board.showsTheBoardAsASCII());
    
    expect(mockConsole).toBeCalledWith(EMPTY_BOARD);
    // expect(mockConsole).toBeCalledWith(EMPTY_BOARD);
    // expect(mockConsole.mock.results[0].value).toBe(EMPTY_BOARD);

  });

  // it('expect the user to see a board with a X in the upper left position', () => {
    
  // });
  
});
