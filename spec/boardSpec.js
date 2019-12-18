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

});
