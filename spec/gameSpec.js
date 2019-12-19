
describe('Game', function() {

  beforeEach(function() {
    game = new Game(board = new Board, player1 = new Player(piece = 'X'), player2 = new Player(piece = 'O'));
  });

  describe('at the start of the game', function() {
    it('game has a board', function() {
      expect(game.board).toBeInstanceOf(Board);
    });
    it('board has a blank grid', function() {
      expect(board.grid).toEqual([['', '', ''], ['', '', ''], ['', '', '']]);
    });
    it('game has a player 1', function() {
      expect(game.player1).toBeInstanceOf(Player);
    });
    it('game has a player 2', function() {
      expect(game.player2).toBeInstanceOf(Player);
    });
    it('player 1 is playing as X', function() {
      expect(player1.piece).toEqual('X');
    });
    it('player 2 is playing as O', function() {
      expect(player2.piece).toEqual('O');
    });
  });

});
