(function(exports) {
  function Board() {
    this.grid = [['', '', ''], ['', '', ''], ['', '', '']];
  };
  Board.prototype.getSquare = function(x, y) {
    return this.grid[x][y];
  };
  Board.prototype.setSquare = function(x, y, value) {
    this.grid[x][y] = value;
  };

  exports.Board = Board;
})(this);
