(function(exports) {
  function Board() {
    this.grid = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
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
    totalGrid.forEach(x => count[x] = (count[x] || 0) + 1);
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
  Board.prototype.isHorizontalWin = function() {
    // separate the arrays
    var firstGrid = this.grid[0];
    var secondGrid = this.grid[1];
    var thirdGrid = this.grid[2];
    // check for x's and o's
    function isX(el, ind, arr) {
      return el === 'X';
    };

    function isO(el, ind, arr) {
      return el === 'O';
    };
    // check each array is all x's or o's
    if (firstGrid.every(isX) || secondGrid.every(isX) || thirdGrid.every(isX) || firstGrid.every(isO) || secondGrid.every(isO) || thirdGrid.every(isO)) {
      return true;
    };
  };
  Board.prototype.isVerticalWin = function() {
    var v1 = this.grid[0][0] + this.grid[1][0] + this.grid[2][0]
    var v2 = this.grid[0][1] + this.grid[1][1] + this.grid[2][1]
    var v3 = this.grid[0][2] + this.grid[1][2] + this.grid[2][2]

    function winX() {
      if (v1 === 'XXX' || v2 === 'XXX' || v3 === 'XXX') {
        return true;
      };
    };

    function winO() {
      if (v1 === 'OOO' || v2 === 'OOO' || v3 === 'OOO') {
        return true;
      };
    };
    if (winX() === true || winO() === true) {
      return true;
    };
  };

  exports.Board = Board;
})(this);
