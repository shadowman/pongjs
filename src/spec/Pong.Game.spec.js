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

	it('should render each element in the game when render gets called', function() {
		game.start();
		for (var eidx = 0; eidx < game.entities; eidx++) {
			if (game.entities[eidx].render) {
				spyOn(game.entities[eidx], 'render');
				expect(game.entities[eidx].render.calls.any()).toBe(false);
			}
		}
		
		game.render(RenderingTestsHelper.create2dRenderContext());

		for (var eidx = 0; eidx < game.entities; eidx++) {
			if (game.entities[eidx].render) {
				expect(game.entities[eidx].render.calls.any()).toBe(true);
			}
		}
	});

	it('should update each element in the game when update gets called', function() {
		game.start();
		for (var eidx = 0; eidx < game.entities; eidx++) {
			if (game.entities[eidx].update) {
				spyOn(game.entities[eidx], 'update');
				expect(game.entities[eidx].update.calls.any()).toBe(false);
			}
		}
		
		game.update(0);

		for (var eidx = 0; eidx < game.entities; eidx++) {
			if (game.entities[eidx].update) {
				expect(game.entities[eidx].update.calls.any()).toBe(true);
			}
		}
	});
});