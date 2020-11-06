# Tech debt!
- player placePin was difficult to remember
- player position isn't self explanatory
  >>> suggestion: make constants in natural language (TOP, )
- fix the annoying jest snippet that isn't working!!!!!! :ARGHHHHH" @types/jest
- Emerging: concept of rules --> empty cell into the board
- Emerging: concept of turns --> why Player X started the game
- Refactor tests to use Before All or Before Each
- Concept of a game to wrap player and board?
- Turn taking
✅ - ~Rule to check for winning positions~
- Rule to check for position that are already taken
- Separate the logic between the board and the player
- Rename the player's name. It shouldn't be related to the pin they are holding
- Unable to run the code outside of the test framework
✅ - ~Not _actually_ testing if the output is output (not validating the console.log)~
- Not limited to creating _just_ player's 'X' and 'O'
- Check to make sure player X goes first
- Check if outside the array
- How to switch between players
✅ - ~Way needed to log the output to console~
- Create a beforeAll empty board for the tests
- Add fixtures for the different states
- outcomeStatement could be a separate method
- Winstates need to be described as natural language
- Should is draw be a separate method?
- rename renderToConsole and showsTheBoardAsASCII - format and render?
- Tests are overlapping - and better naming/structure
- Test the remaining conditions (all of the moves?)
- Fixtures/tesDoubles need to be organised/tidied - single file
  - Result of this.cells vs showsTheBoardAsASCII() - use one type
- Could we write a test.each, that makes each move, and compares to each fixture