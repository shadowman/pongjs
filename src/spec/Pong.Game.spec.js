describe('Game', function(){
	var game;

	beforeEach(function() {
		game = new Game();	
	});

	it('should create two players when game gets created', function() {
		expect(game.players.length).toBe(2);
	});

	it('should have score set to zero if game just started', function() {
		expect(game.getScoreForPlayer(0)).toBe(0);
	});

	it('should create a ball when game starts', function() {
		expect(1).toBe(2);
	});

	it('should render each element in the game when render gets called', function() {
		expect(1).toBe(2);
	});

	it('should update each element in the game when update gets called', function() {
		expect(1).toBe(2);
	});
});