# Tic Tac Toe Tech Test!

This is a very common tech test as it demonstrates a candidate's knowledge of basic data structures.

## The brief

The rules of tic-tac-toe are as follows:

There are two players in the game (X and O)
Players take turns until the game is over
A player can claim a field if it is not already taken
A turn ends when a player claims a field
A player wins if they claim all the fields in a row, column or diagonal
A game is over if a player wins
A game is over when all fields are taken
Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

## MY NOTES

Game class - has a board and 2 players
Board class - has a grid (3x3 array)
Player class - has a piece (x or o)

GAME

Current player?

BOARD

setSquare(x, y, value)
setsquare(x, y).value = value

gameOver = return winner if winner
return draw if draw
