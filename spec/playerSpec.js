describe('Player', function() {

  beforeEach(function() {
    game = new Game(board = new Board, player1 = new Player(piece = 'X'), player2 = new Player(piece = 'O'));
  });

  it('player 1 is X', function() {
    expect(player1.piece).toEqual('X');
  });

  it('player 2 is O', function() {
    expect(player2.piece).toEqual('O');
  });

});
