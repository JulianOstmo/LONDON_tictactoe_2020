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
  ## Pomodoro 3


---

# Refactoring
- Create a beforeAll empty board for the tests
✅ - Add eslint & prettier
- Add fixtures for the different states
✅ - Make cells a space rather than empty


---
# TechDebt
- fix the annoying jest snippet that isn't working!!!!!! :ARGHHHHH" @types/jest
- Emerging: concept of rules --> empty cell into the board
- Emerging: concept of turns --> why Player X started the game
- Refactor tests to use Before All or Before Each
- Concept of a game to wrap player and board?
- Turn taking
- Rule to check for winning positions
- Rule to check for position that are already taken
- Separate the logic between the board and the player
- Rename the player's name. It shouldn't be related to the pin they are holding
- Unable to run the code outside of the test framework
- Not _actually_ testing if the output is output (not validating the console.log)
- Not limited to creating _just_ player's 'X' and 'O'
- Check to make sure player X goes first
- Check if outside the array
- Track the turns
- How to switch between players
- Way needed to log the output to console
