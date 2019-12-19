(function(exports) {
  function Game(board, player1, player2) {
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
  };
  Game.prototype.switchTurns = function() {
    if (this.currentPlayer === player1) {
      this.currentPlayer = player2;
    } else if (this.currentPlayer === player2) {
      this.currentPlayer = player1;
    };
    return this.currentPlayer;
  };


  exports.Game = Game;
})(this);
