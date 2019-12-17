describe('Game', function() {

  beforeEach(function() {
    game = new Game(board = new Board);
  });

  describe('at the start of the game', function() {
    it('game has a board', function() {
      board = game.showBoard();
      expect(board).toEqual(game.board);
    });
    it('board has a blank grid', function() {
      expect(board.grid).toEqual([['', '', ''], ['', '', ''], ['', '', '']]);
    });
  });

});
