'use strict';

var Game = function Game(courtWidth, courtHeight) {
  _.extend(
    this, {
      entities: [],
      players: [],
      getScoreForPlayer: function (playerNumber) {
        return this.players[playerNumber].score;
      },

      start: function () {
        this.players[0].receiveTheBall();
      },

      stop: function () {
      },

      update: function (dt) {
        _.each(
          this.entities,
          function (entity) {
            entity = Physics.integrate(dt, entity);
            if (entity.update)
              entity.update(dt);
          }
        );
      },

      render: function (context) {
        clear(context);
        _.each(
          this.entities,
          function (entity) {
            if (entity.render) {
              entity.render(context);
            }
          }
        );

        function clear(context) {
          var ctx = context.context;
          ctx.fillStyle = '#000000';
          ctx.fillRect(0, 0, context.screen.width, context.screen.height);
        }
      }
    }
  );

  configure(this);

  function configure(game) {
    configureCourt();
    configurePlayerOne();
    configurePlayerTwo();

    function configureCourt() {
      game.court = new Court(courtWidth, courtHeight, $V([5, 5]));
      game.entities.push(game.court);
    }

    function configurePlayerOne() {
      var controllerBehavior = new KeyboardControlledBehavior();
      var player = new Player(
        $V([
          game.court.position.e(1) + 20,
          courtHeight / 2
        ]),
        controllerBehavior
      )

      controllerBehavior.addKeyMapping(player, 'moveLeft', Keyboard.keys.LEFT);
      controllerBehavior.addKeyMapping(player, 'moveRight', Keyboard.keys.RIGHT);
      controllerBehavior.addKeyMapping(player, 'throwBall', Keyboard.keys.SPACE);

      game.players.push(player);
      game.entities.push(game.players[0]);
    }

    function configurePlayerTwo() {
      game.players.push(
        new Player(
          $V([
            game.court.position.e(1) - 20 + courtWidth,
            courtHeight / 2
          ]),
          new KeyboardControlledBehavior()
        )
      );
      game.entities.push(game.players[1]);
    }
  }
};