describe('Board', function() {

  beforeEach(function() {
    game = new Game(board = new Board, player1 = new Player(piece = 'X'), player2 = new Player(piece = 'O'));
  });

  describe('get square function', function() {
    it('returns the value of the square', function() {
      board.grid[0][0] = 'X'
      expect(board.getSquare(0, 0)).toEqual('X');
    });
  });

  describe('set square function', function() {
    it('sets the value of the square', function() {
      board.setSquare(0, 0, 'O');
      expect(board.getSquare(0, 0)).toEqual('O');
      console.log(board.grid);
    });
  });

});
