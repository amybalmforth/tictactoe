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
    if (this.grid[x][y] === 'X' || this.grid[x][y] === 'O') {
      return 'Square already taken';
    };
    this.grid[x][y] = value;
    game.showBoard()
    game.switchTurns();
    if (this.gameOver() === true) {
      game.getResult();
    };
  };
  Board.prototype.gameOver = function() {
    if (this.isHorizontalWin()) {
      return true;
    };
    if (this.isVerticalWin()) {
      return true;
    };
    if (this.isDiagonalWin()) {
      return true;
    };
    if (this.isDraw()) {
      return true;
    };
  };
  Board.prototype.isDraw = function() {
    var totalGrid = [].concat.apply([], this.grid);
    var xo = ['X', 'O']
    var counter = 0;
    for (var i = 0; i < totalGrid.length; i++) {
      for (var z = 0; z < xo.length; z++) {
        if (xo[z] === totalGrid[i]) {
          counter++;
        };
      };
    };
    if (counter === 9) {
      return true;
    };
  };
  Board.prototype.isHorizontalWin = function() {
    var firstGrid = this.grid[0];
    var secondGrid = this.grid[1];
    var thirdGrid = this.grid[2];

    function isX(el, ind, arr) {
      return el === 'X';
    };

    function isO(el, ind, arr) {
      return el === 'O';
    };
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
  Board.prototype.isDiagonalWin = function() {
    var d1 = this.grid[0][0] + this.grid[1][1] + this.grid[2][2]
    var d2 = this.grid[2][0] + this.grid[1][1] + this.grid[0][2]

    if (d1 === 'XXX' || d2 === 'XXX' || d1 === 'OOO' || d2 === 'OOO') {
      return true;
    };
  };

  exports.Board = Board;
})(this);
