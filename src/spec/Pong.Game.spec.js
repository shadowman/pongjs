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
		game.start();

		expect(game.entities.length).toBe(3);
	});

	it('should render the ball when render gets called', function() {
		game.start();
		spyOn(game.entities[2], 'render');
		var ball = game.entities[2];
		expect(ball.render.calls.any()).toBe(false);
		
		game.render(RenderingTestsHelper.create2dRenderContext());

		expect(ball.render.calls.any()).toBe(true);
	});

	it('should render each element in the game when render gets called');

	it('should update each element in the game when update gets called');
});