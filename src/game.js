(function (exports) {
  function Game (board, player1, player2) {
    this.board = board
    this.player1 = player1
    this.player2 = player2
    this.currentPlayer = player1
    this.otherPlayer = player2
  };
  Game.prototype.showBoard = function () {
    console.log(board.grid)
  }
  Game.prototype.switchTurns = function () {
    if (this.currentPlayer === player1) {
      this.currentPlayer = player2
      this.otherPlayer = player1
    } else if (this.currentPlayer === player2) {
      this.currentPlayer = player1
      this.otherPlayer = player2
    };
    return this.currentPlayer
  }
  Game.prototype.getResult = function () {
    if (board.isHorizontalWin() || board.isVerticalWin() || board.isDiagonalWin()) {
      return `${this.otherPlayer.piece} wins!`
      console.log(`${this.otherPlayer.piece} wins!`)
    };
    if (board.isDraw()) {
      return 'It is a draw!'
      console.log('It is a draw!')
    };
  }

  exports.Game = Game
})(this)
