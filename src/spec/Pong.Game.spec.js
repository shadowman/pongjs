'use strict';

describe('Game', function () {
  var game;

  beforeEach(function () {
    game = new Game(300, 200);
  });

  it('should create a court for the players when the game gets created', function () {
    expect(game.court).not.toBeNull();
  });

  it('should create a court with the sizes provided', function () {
    expect(game.court.width).toBe(300);
    expect(game.court.height).toBe(200);
  });

  it('should create two players when game gets created', function () {
    expect(game.players.length).toBe(2);
  });

  it('should have score set to zero if game just started', function () {
    expect(game.getScoreForPlayer(0)).toBe(0);
  });

  it('should start player one in the middle of the left side of the court', function () {
    game.start();

    expect(game.players[0].position).toEqual(
      $V([game.court.position.e(1) + 20, game.court.height / 2])
    );
  });

  it('should strart player two in the middle of the right side of the court', function () {
    game.start();

    expect(game.players[1].position).toEqual(
      $V([game.court.position.e(1) - 20 + game.court.width, game.court.height / 2])
    );
  });

  it('should add players to the scene');
  it('should add court to the scene');
  it('should render the scene when render gets called');
  it('should update the scene when update gets called');

  it('should give the a ball to player one when game starts', function () {
    expect(game.players[0].hasTheBall()).toBeFalsy();

    game.start();

    expect(game.players[0].hasTheBall()).toBeTruthy();
  });

  it('should render each element in the game when render gets called', function () {
    game.start();
    spyOnCollection(game.entities, 'render');
    expectCallsOnCollectionItemsFunction(game.entities, 'render', 'toBeFalsy');

    game.render(RenderingTestsHelper.create2dRenderContext());

    expectCallsOnCollectionItemsFunction(game.entities, 'render', 'toBeTruthy');
  });

  it('should update each element in the game when update gets called', function () {
    game.start();
    spyOnCollection(game.entities, 'update');
    expectCallsOnCollectionItemsFunction(game.entities, 'update', 'toBeFalsy');

    game.update(0);

    expectCallsOnCollectionItemsFunction(game.entities, 'update', 'toBeTruthy');
  });

  it('should integrate each element in the game when update gets called', function () {
    game.start();

    spyOn(Physics, 'integrate').and.callThrough();
    expect(Physics.integrate.calls.any()).toBeFalsy();

    game.update(0);

    expect(Physics.integrate.calls.count()).toBe(game.entities.length);
  });

  function spyOnCollection(coll, fnName) {
    _.each(
      coll,
      function (entity) {
        if (entity[fnName]) {
          spyOn(entity, fnName);
          expect(entity[fnName].calls.any()).toBeFalsy();
        }
      }
    );
  }

  function expectCallsOnCollectionItemsFunction(coll, fnName, expectation) {
    _.each(
      coll,
      function (entity) {
        if (entity[fnName]) {
          expect(entity[fnName].calls.any())[expectation]();
        }
      }
    );
  }
});