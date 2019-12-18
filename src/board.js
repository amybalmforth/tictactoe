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
  Board.prototype.isDraw = function() {
    // flatten to one array
    var totalGrid = [].concat.apply([], this.grid);
    var count = {};
    totalGrid.forEach(x => count[x] = (count[x] || 0) +1);
    // returns an object x:#
    total = 0;
    for (var property in count) {
      total += count[property];
    };
    // total amount of x's and o's
      if (total === 9) {
        return true;
      };
  };

  exports.Board = Board;
})(this);
