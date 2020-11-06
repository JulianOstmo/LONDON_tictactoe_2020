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
  it('Player X - Places pin X on top left space', () => {
    const board = new Board();
    const playerX = new Player('X', board);

    //   - X - top left
    playerX.placePin(0);
    expect(board.cells).toEqual(['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });

  it('Player O - Places pin O in center space', () => {
    const board = new Board();
    const playerX = new Player('X', board);
    const playerO = new Player('O', board);

    //   - X - top left
    playerX.placePin(0);
    //   - O - Middle
    playerO.placePin(4);
    expect(board.cells).toEqual(['X', ' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ']);
  });

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
    // CI TEST
    expect(board.cells).toEqual(['X', 'O', ' ', 'X', 'O', ' ', 'X', ' ', ' ']);
    //   - X wins --> expect 
    expect(board.announceTheWinner()).toBe("X");
  });

  // it('Player O - Moves compliant with the rules to have a board with the player O won in vertical on the left side of it.', () => {
    // - **BRUTE FORCE** Test scenario : Moves
    // const board = new Board();
    // const playerX = new Player('X', board);
    // const playerO = new Player('O', board); // DRY!!!

    // - X - middle
    // - O - middle left
    // - X - top middle
    // - O - bottom left
    // - X - middle right
    // - 0 - top left
    // - O wins --> expect
  //   expect(board.announceTheWinner()).toBe("O");
  // });

  
  
  
  describe('Moves compliant with the rules to get a game outcome', () => {
      let playerX;
      let playerO;
      let board;

    beforeEach(() => {
        board = new Board();
        playerX = new Player('X', board);
        playerO = new Player('O', board);
      });

      it('player O wins with a Diagonal Victory (/) ', () => {
        //   - X - top left
        playerX.placePin(0);
        //   - O - Middle left
        playerO.placePin(2);
        //   - X - top middle
        playerX.placePin(1);
        //   - O - bottom left
        playerO.placePin(4);
        //   - X - middle left
        playerX.placePin(3);
        //   - O - bottom left
        playerO.placePin(6);
        expect(board.cells).toEqual(['X', 'X', 'O', 'X', 'O', ' ', 'O', ' ', ' ']);
        expect(board.announceTheWinner()).toBe("O");
      });

      it.skip('player X places pin on top left', () => {
        //   - X - top left
        playerX.placePin(0);
        // CI TEST
        expect(board.cells).toEqual(['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
        //   - X wins --> expect 
        expect(board.announceTheWinner()).toBe("No winner");
      });
      it('player X wins with an horizontal top line', () => {
        //   - X - top left
        playerX.placePin(0);
        //   - O - Middle left
        playerO.placePin(4);
        //   - X - top middle
        playerX.placePin(1);
        //   - O - bottom left
        playerO.placePin(6);
        //   - X - top right
        playerX.placePin(2);
        // CI TEST
        expect(board.cells).toEqual(['X', 'X', 'X', ' ', 'O', ' ', 'O', ' ', ' ']);
        //   - X wins --> expect 
        expect(board.announceTheWinner()).toBe("X");
      });

});

  
});
