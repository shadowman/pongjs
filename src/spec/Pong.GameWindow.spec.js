describe('GameWindow', function(){
	var gameWindow,
		fakeGame;

	beforeEach(function() {
		fakeGame = { 
			render: function() {}, 
			update: function() {}
		};
		
		gameWindow = new GameWindow('viewport', 200, 300, fakeGame);	
	});
	
	it('should set the canvas to the provided width and height on creation', function() {
		expect(gameWindow.screen.width).toBe(200);
		expect(gameWindow.screen.height).toBe(300);
	});

	it('should find the element with the id viewport on creation', function() {
		expect(gameWindow.screen.id).toBe('viewport');
	});

	it('should be stopped when created for the first time', function() {
		expect(gameWindow.isRunning()).toBe(false);
	});

	it('should run the gameWindow loop when run gets called', function() {
		gameWindow.run();

		expect(gameWindow.isRunning()).toBe(true);
	});

	it('should stop the gameWindow loop when stop gets called', function(){
		gameWindow.run();
		expect(gameWindow.isRunning()).toBe(true);

		gameWindow.stop();
		expect(gameWindow.isRunning()).toBe(false);
	});

	it('should call the game\'s render method on run', function() {
		spyOn(fakeGame, 'render');
		expect(fakeGame.render.calls.any()).toEqual(false);

		gameWindow.run();

		expect(fakeGame.render.calls.any()).toEqual(true);
	});
	

	it('should call the game\'s render method with the render context', function() {
		spyOn(fakeGame, 'render');

		gameWindow.run();

		expect(fakeGame.render.calls.argsFor(0)[0]).toEqual({
			context: gameWindow.screen.getContext('2d'), 
			screen: { 
				width: gameWindow.screen.width, 
				height: gameWindow.screen.height
			}
		});
	});

	it('should call the games\'s update method on run', function() {

		spyOn(fakeGame, 'update');
		expect(fakeGame.update.calls.any()).toEqual(false);

		gameWindow.run();

		expect(fakeGame.update.calls.any()).toEqual(true);
	});


	it('should update the game passing the elapsed time from last tick');
});