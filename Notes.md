# Scenario 0 - Game creation
✅- assuming the board is a "class" --> let it emerge.
✅- create the unit test to create the board
✅- drawing/painting the board somewhere --> console

# Scenario 1 - Player X paints the X pin on the board
✅ Install eslint, prettier and jest types
`exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/paulolramos/eslint-prettier-airbnb-react/master/eslint-prettier-config.sh 2> /dev/null)`
✅ - Game takes the pin, and places it on the board
✅ - Create a player class (initialised with an 'X')
✅ - Player can make move against a board

**Coding Goal**: Coding the Player X ability to paint an X on the board.


# Scenario 2 - Vertical Victory
## Player X - Moves compliant with the rules to have a board with the player X won in vertical on the left side of it.
- **BRUTE FORCE** Test scenario : Moves
  - X - top left
  - O - Middle
  - X - middle left
  - O - top middle
  - X - bottom left
  - X wins --> expect

## Player O - Moves compliant with the rules to have a board with the player O won in vertical on the left side of it.
- **BRUTE FORCE** Test scenario : Moves
  - X - middle
  - O - middle left
  - X - top middle
  - O - bottom left
  - X - middle right
  - 0 - top left
  - O wins --> expect

## Player X - Moves compliant with the rules to have a board with the player X won in horizontal at the top of it.
- **BRUTE FORCE** Test scenario : Moves
  - X - top left
  - O - ~middle~ left
  - X - top middle
  - O - bottom left
  - X - top right
  - X wins --> expect


## Scenario 3 - Player 0 wins with a Diagonal line (/)
  ## Pomodoro 1
    - Finish off the horizonal victory scenario
    - Tackle Tech Debt (Refactor)
  ## Pomodoro 2
    - Draw?
  ## Pomodoro 3



## Scenario 4
- console.log
  - check console log for the output
- Render empty board on create
- Render after each move
- Render special text on win conditions
  - 'X' has won!
  - 'O' has won!
  - The game was a draw!
