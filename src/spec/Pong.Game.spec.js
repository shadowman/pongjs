describe('Game', function(){
	var game;

	beforeEach(function() {
		game = new Game(300, 200);	
	});

	it('should create a court for the players when the game gets created', function() {
		expect(game.court).not.toBeNull();
	});

	it('should create a court with the sizes provided', function() {
		expect(game.court.width).toBe(300);
		expect(game.court.height).toBe(200);
	});

	it('should create two players when game gets created', function() {
		expect(game.players.length).toBe(2);
	});

	it('should have score set to zero if game just started', function() {
		expect(game.getScoreForPlayer(0)).toBe(0);
	});
	it('should strart player one in the middle of the left side of the court', function() {
		game.start();

		expect(game.players[0].position).toEqual($V([game.court.position.e(1) + 20, game.court.height / 2]))
	});

	it('should strart player two in the middle of the right side of the court', function() {
		game.start();

		expect(game.players[1].position).toEqual($V([game.court.position.e(1) - 20 + game.court.width, game.court.height / 2]))
	});

	it('should add players to the scene');
	it('should add court to the scene');
	it('should render the scene when render gets called');
	it('should update the scene when update gets called');

	it('should give the a ball to player one when game starts', function() {
		expect(game.players[0].hasTheBall()).toBe(false);
		
		game.start();

		expect(game.players[0].hasTheBall()).toBe(true);
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

	it('should integrate each element in the game when update gets called', function() {
		game.start();

		spyOn(game.physics, 'integrate').and.callThrough();	
		expect(game.physics.integrate.calls.any()).toBe(false);
		
		game.update(0);

		expect(game.physics.integrate.calls.count()).toBe(game.entities.length);
	});
});