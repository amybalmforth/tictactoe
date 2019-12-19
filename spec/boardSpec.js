

describe('Board', function() {

  beforeEach(function() {
    game = new Game(board = new Board, player1 = new Player(piece = 'X'), player2 = new Player(piece = 'O'));
  });

  describe('get square function', function() {
    it('returns the value of a square', function() {
      board.grid[0][0] = 'X'
      expect(board.getSquare(0, 0)).toEqual('X');
    });
    it('returns the value of a second square', function() {
      board.grid[1][1] = 'O'
      expect(board.getSquare(1, 1)).toEqual('O');
    });
  });

  describe('set square function', function() {
    it('sets the value of the square', function() {
      board.setSquare(0, 0, 'O');
      expect(board.getSquare(0, 0)).toEqual('O');
    });
    it('sets the value of a second square', function() {
      board.setSquare(1, 0, 'X');
      board.setSquare(2, 2, 'O');
      expect(board.getSquare(1, 0)).toEqual('X');
      expect(board.getSquare(2, 2)).toEqual('O');
    });
  });

  describe('a draw', function() {
    it('knows if the game is a draw', function() {
      board.setSquare(0, 0, 'X');
      board.setSquare(0, 1, 'O');
      board.setSquare(0, 2, 'O');
      board.setSquare(1, 0, 'O');
      board.setSquare(1, 1, 'X');
      board.setSquare(1, 2, 'X');
      board.setSquare(2, 0, 'X');
      board.setSquare(2, 1, 'X');
      board.setSquare(2, 2, 'O');
      expect(board.isDraw()).toEqual(true);
    });
  });

  describe('a horizontal win', function() {
    it('knows if a horizontal win was made for X on top', function() {
      board.setSquare(0, 0, 'X');
      board.setSquare(1, 0, 'O');
      board.setSquare(0, 1, 'X');
      board.setSquare(1, 1, 'O');
      board.setSquare(0, 2, 'X');
      expect(board.isHorizontalWin()).toEqual(true);
    });
    it('knows if a horizontal win was made for O on top', function() {
      board.setSquare(0, 0, 'O');
      board.setSquare(1, 0, 'X');
      board.setSquare(0, 1, 'O');
      board.setSquare(1, 1, 'X');
      board.setSquare(0, 2, 'O');
      expect(board.isHorizontalWin()).toEqual(true);
    });
    it('knows if a horizontal win was made for X in middle', function() {
      board.setSquare(1, 0, 'X');
      board.setSquare(2, 0, 'O');
      board.setSquare(1, 1, 'X');
      board.setSquare(2, 1, 'O');
      board.setSquare(1, 2, 'X');
      expect(board.isHorizontalWin()).toEqual(true);
    });
    it('knows if a horizontal win was made for O in middle', function() {
      board.setSquare(1, 0, 'O');
      board.setSquare(2, 0, 'X');
      board.setSquare(1, 1, 'O');
      board.setSquare(2, 1, 'X');
      board.setSquare(1, 2, 'O');
      expect(board.isHorizontalWin()).toEqual(true);
    });
    it('knows if a horizontal win was made for X on bottom', function() {
      board.setSquare(2, 0, 'X');
      board.setSquare(1, 0, 'O');
      board.setSquare(2, 1, 'X');
      board.setSquare(1, 1, 'O');
      board.setSquare(2, 2, 'X');
      expect(board.isHorizontalWin()).toEqual(true);
    });
    it('knows if a horizontal win was made for O on bottom', function() {
      board.setSquare(2, 0, 'O');
      board.setSquare(1, 0, 'X');
      board.setSquare(2, 1, 'O');
      board.setSquare(1, 1, 'X');
      board.setSquare(2, 2, 'O');
      expect(board.isHorizontalWin()).toEqual(true);
    });
  });

  describe('a vertical win', function() {
    it('knows if a vertical win was made for X on first col', function() {
      board.setSquare(0, 0, 'X');
      board.setSquare(0, 1, 'O');
      board.setSquare(1, 0, 'X');
      board.setSquare(1, 1, 'O');
      board.setSquare(2, 0, 'X');
      expect(board.isVerticalWin()).toEqual(true);
    });
    it('knows if a vertical win was made for O on first col', function() {
      board.setSquare(0, 0, 'O');
      board.setSquare(0, 1, 'X');
      board.setSquare(1, 0, 'O');
      board.setSquare(1, 1, 'X');
      board.setSquare(2, 0, 'O');
      expect(board.isVerticalWin()).toEqual(true);
    });
    it('knows if a vertical win was made for X on second col', function() {
      board.setSquare(0, 1, 'X');
      board.setSquare(0, 0, 'O');
      board.setSquare(1, 1, 'X');
      board.setSquare(1, 0, 'O');
      board.setSquare(2, 1, 'X');
      expect(board.isVerticalWin()).toEqual(true);
    });
    it('knows if a vertical win was made for O on second col', function() {
      board.setSquare(0, 1, 'O');
      board.setSquare(0, 0, 'X');
      board.setSquare(1, 1, 'O');
      board.setSquare(1, 0, 'X');
      board.setSquare(2, 1, 'O');
      expect(board.isVerticalWin()).toEqual(true);
    });
    it('knows if a vertical win was made for X on third col', function() {
      board.setSquare(0, 2, 'X');
      board.setSquare(1, 1, 'O');
      board.setSquare(1, 2, 'X');
      board.setSquare(2, 1, 'O');
      board.setSquare(2, 2, 'X');
      expect(board.isVerticalWin()).toEqual(true);
    });
    it('knows if a vertical win was made for O on third col', function() {
      board.setSquare(0, 2, 'O');
      board.setSquare(1, 1, 'X');
      board.setSquare(1, 2, 'O');
      board.setSquare(2, 1, 'X');
      board.setSquare(2, 2, 'O');
      expect(board.isVerticalWin()).toEqual(true);
    });
  });

  describe('a diagonal win', function() {
    it('knows if a diagonal win was made for X l-r', function() {
      board.setSquare(0, 0, 'X');
      board.setSquare(1, 0, 'O');
      board.setSquare(1, 1, 'X');
      board.setSquare(2, 0, 'O');
      board.setSquare(2, 2, 'X');
      expect(board.isDiagonalWin()).toEqual(true);
    });
    it('knows if a diagonal win was made for O l-r', function() {
      board.setSquare(0, 0, 'O');
      board.setSquare(1, 0, 'X');
      board.setSquare(1, 1, 'O');
      board.setSquare(2, 0, 'X');
      board.setSquare(2, 2, 'O');
      expect(board.isDiagonalWin()).toEqual(true);
    });
    it('knows if a diagonal win was made for X r-l', function() {
      board.setSquare(2, 0, 'X');
      board.setSquare(1, 0, 'O');
      board.setSquare(1, 1, 'X');
      board.setSquare(0, 0, 'O');
      board.setSquare(0, 2, 'X');
      expect(board.isDiagonalWin()).toEqual(true);
    });
    it('knows if a diagonal win was made for O r-l', function() {
      board.setSquare(2, 0, 'O');
      board.setSquare(1, 0, 'X');
      board.setSquare(1, 1, 'O');
      board.setSquare(0, 0, 'X');
      board.setSquare(0, 2, 'O');
      expect(board.isDiagonalWin()).toEqual(true);
    });
  });

  describe('returning result of game', function() {
    it('can check if horizontal win method returns true', function() {
      board.setSquare(0, 0, 'X');
      board.setSquare(1, 0, 'O');
      board.setSquare(0, 1, 'X');
      board.setSquare(1, 1, 'O');
      board.setSquare(0, 2, 'X');
      expect(board.gameOver()).toEqual(true);
    });
    it('can check if vertical win method returns true', function() {
      board.setSquare(0, 0, 'X');
      board.setSquare(0, 1, 'O');
      board.setSquare(1, 0, 'X');
      board.setSquare(1, 1, 'O');
      board.setSquare(2, 0, 'X');
      expect(board.gameOver()).toEqual(true);
    });
    it('can check if diagonal win method returns true', function() {
      board.setSquare(0, 0, 'X');
      board.setSquare(1, 0, 'O');
      board.setSquare(1, 1, 'X');
      board.setSquare(2, 0, 'O');
      board.setSquare(2, 2, 'X');
      expect(board.gameOver()).toEqual(true);
    });
    it('can check if draw method returns true', function() {
      board.setSquare(0, 0, 'X');
      board.setSquare(0, 1, 'O');
      board.setSquare(0, 2, 'O');
      board.setSquare(1, 0, 'O');
      board.setSquare(1, 1, 'X');
      board.setSquare(1, 2, 'X');
      board.setSquare(2, 0, 'X');
      board.setSquare(2, 1, 'X');
      board.setSquare(2, 2, 'O');
      expect(board.gameOver()).toEqual(true);
    });
  });

  describe('cannot put a mark on occupied square', function() {
    it('cannot put an O in top left square if X already there', function() {
      board.setSquare(0, 0, 'X');
      expect(board.setSquare(0, 0, 'O')).toEqual('Square already taken');
    });
  });

});
