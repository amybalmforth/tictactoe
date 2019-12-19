
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

  describe('current player', function() {
    it('current player starts as player 1', function() {
      expect(game.currentPlayer).toBeInstanceOf(Player);
    });
    it('switches to player 2 after player 1 goes', function() {
      board.setSquare(0, 0, 'X');
      expect(game.currentPlayer).toEqual(game.player2);
    });
    it('switches to player 2 after player 1 goes', function() {
      board.setSquare(0, 0, 'X');
      board.setSquare(0, 1, 'O');
      expect(game.currentPlayer).toEqual(game.player1);
    });
  });

});
