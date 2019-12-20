# Tic Tac Toe Tech Test

This is a back-end program containing the business logic for a game of tic tac toe.

I have split the program into the following objects and methods:

*Game object*

- Initialise a Game object with 1 Board object and 2 Player objects
- Has currentPlayer property and otherPlayer property
- switchTurns method switches the current player after each move
- getResult method returns the result of the game: either a draw or confirms which player won

*Player object*

- Initialise a Player object with a Piece property: either 'X' or 'O'

*Board object*

- Initialised with a grid (3D array of empty strings)
- getSquare method returns the value of a given square
- setSquare method sets the value of a square then switches player turns
- You cannot set the value of a square which is already taken
- isDraw method calculates if the game was a draw
- isHorizontalWin, isVerticalWin and isDiagonalWin methods calculate different kinds of wins
- gameOver method confirms if the game is over by draw or win

## The brief

The rules of tic-tac-toe are as follows:

- There are two players in the game (X and O)
- Players take turns until the game is over
- A player can claim a field if it is not already taken
- A turn ends when a player claims a field
- A player wins if they claim all the fields in a row, column or diagonal
- A game is over if a player wins
- A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

## Instructions for running the program

1. git clone
2. run "npm install"
3. run "npm run coverage" -- to see test coverage (Istanbul)
4. run "open SpecRunner.html" -- to run Jasmine tests
5. run ESLint:
  - ./node_modules/.bin/eslint spec/gameSpec.js
  - ./node_modules/.bin/eslint spec/playerSpec.js
  - ./node_modules/.bin/eslint spec/boardSpec.js
  - ./node_modules/.bin/eslint src/game.js
  - ./node_modules/.bin/eslint src/player.js
  - ./node_modules/.bin/eslint src/board.js
6. In JS console:

```
game = new Game(board = new Board, player1 = new Player(piece = 'X'), player2 = new Player(piece = 'O'));
Game {board: Board, player1: Player, player2: Player, currentPlayer: Player, otherPlayer: Player}
game.showBoard();
["", "", ""]
["", "", ""]
["", "", ""]
board.setSquare(0, 0, 'X');
["X", "", ""]
["", "", ""]
["", "", ""]
board.setSquare(1, 0, 'O');
["X", "", ""]
["O", "", ""]
["", "", ""]
board.setSquare(0, 1, 'X');
["X", "X", ""]
["O", "", ""]
["", "", ""]
board.setSquare(1, 1, 'O');
["X", "X", ""]
["O", "O", ""]
["", "", ""]
board.setSquare(0, 2, 'X');
["X", "X", "X"]
["O", "O", ""]
["", "", ""]
game.getResult();
"X wins!"
```
