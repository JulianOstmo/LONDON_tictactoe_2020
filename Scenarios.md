Homework:
Timelaps analysis of the TicTacToe game

# Stage 0: no game
Scenario : game creation
Events --> Someone is drawing the game board.
Outcome--> The game board is created.

Pomodoro > Coding the outcome, test suite to code the game board creation.
---

# Stage 1: pin X is on the board
Scenario : Player X paints the X pin on the board
Events --> Player X starts the game, and paints the X pin on the board bounduaries.
Outcome--> There's an X on the board.

Pomodoro > Coding the Player X ability to paint an X on the board.

Stage N: Player X won V || D || H --- O --- draw.


# Vertical Victory:
XX   ???? player X yell ( I WON!)
Pro-
Cons-

XXXX ???? board notify Players about the victory of playerX
Pro-
Cons-
---
>> the team decided to pick-up the option of the board leading the logic to the rule engine creation....

RULES ENGINE???
- the move is outside the board
- the move is on a not empty cell
- ...

Describe Game Rules:
✅ - The games initiates with an empty board
- Each player places its pin on an empty cell
- Player X is the first one starting to play
- A player cannot move outside of the board
- A player cannot move to a not empty cell
- Each player can take one turn at a time
- If there are no more valid moves, a Draw happens
- A horizontal win happens when three of the same symbols are next to each other on a horizontal line
- A vertical win happens when three of the same symbols are next to each other on a vertical line
- A diagonal win happens when three of the same symbols are next to each other on a diagonal line

Behaviours:
- After each turn we announce if there is a winner, and with what kind of victory they won
- Announce after each move if it's an invalid move
- If at the end of the game, and no one wins, we announce a draw (it happens after there are no more empty cells)

