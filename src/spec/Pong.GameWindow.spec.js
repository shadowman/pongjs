describe('GameWindow', function () {
  var gameWindow,
    fakeGame;

  beforeEach(function () {
    fakeGame = {
      start: function () {
      },
      stop: function () {
      },
      render: function () {
      },
      update: function () {
      }
    };

    gameWindow = new GameWindow('viewport', 200, 300, fakeGame);
  });

  it('should set the canvas to the provided width and height on creation', function () {
    expect(gameWindow.screen.width).toBe(200);
    expect(gameWindow.screen.height).toBe(300);
  });

  it('should find the element with the id viewport on creation', function () {
    expect(gameWindow.screen.id).toBe('viewport');
  });

  it('should be stopped when created for the first time', function () {
    expect(gameWindow.isRunning()).toBeFalsy();
  });

  it('should run the gameWindow loop when run gets called', function () {
    gameWindow.run();

    expect(gameWindow.isRunning()).toBeTruthy();
  });

  it('should stop the gameWindow loop when stop gets called', function () {
    gameWindow.run();
    expect(gameWindow.isRunning()).toBeTruthy();

    gameWindow.stop();
    expect(gameWindow.isRunning()).toBeFalsy();
  });

  it('should start the game on when run gets called', function () {
    spyOn(fakeGame, 'start');

    gameWindow.run();

    expect(fakeGame.start.calls.any()).toBeTruthy();
  });

  it('should stop the game when stop gets called', function () {
    spyOn(fakeGame, 'stop');
    expect(fakeGame.stop.calls.any()).toBeFalsy();

    gameWindow.stop();

    expect(fakeGame.stop.calls.any()).toBeTruthy();
  });

  it('should call the game\'s render method on run', function () {
    spyOn(fakeGame, 'render');
    expect(fakeGame.render.calls.any()).toBeFalsy();

    gameWindow.run();

    expect(fakeGame.render.calls.any()).toBeTruthy();
  });

  it('should call the game\'s render method with the render context', function () {
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

  it('should call the games\'s update method on run', function () {

    spyOn(fakeGame, 'update');
    expect(fakeGame.update.calls.any()).toBeFalsy();

    gameWindow.run();

    expect(fakeGame.update.calls.any()).toBeTruthy();
  });

  it('should instantiate keyboard for others to use', function () {
    expect(GameWindow.Keyboard).not.toBeNull();
  });

  it('should update the game passing the elapsed time from last tick');

});