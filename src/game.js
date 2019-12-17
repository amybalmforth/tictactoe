(function(exports) {
  function Game(board) {
    this.board = board;
  };
  Game.prototype.showBoard = function() {
    return this.board;
  };
  Game.prototype.play1 = function() {

  };

  exports.Game = Game;
})(this);
