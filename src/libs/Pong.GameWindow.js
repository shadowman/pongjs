'use strict';

var GameWindow = GameWindow || function (screen, width, height, game) {
  var running = false,
    fpsCount = 0;

  _.extend(
    this, {
      screen: getScreen(screen, width, height),
      game: game,

      run: function () {
        var _gw = this;
        running = true;
        this.game.start();
        run();

        function run() {
          if (running) {
            window.requestAnimationFrame(run);
            updateFps();
            _gw.update();
            _gw.render();
          }

          function updateFps() {
            updateFrameTimes();
            if (_gw.currentFrameTime - _gw.lastFrameRateIntervalTime > 1000) {
              _gw.lastFpsCount = _gw.fpsCount;
              _gw.fpsCount = 0;
              _gw.lastFrameRateIntervalTime = _gw.currentFrameTime;
            }
            _gw.fpsCount++;

            function updateFrameTimes() {
              _gw.lastFrameRateIntervalTime = _gw.lastFrameRateIntervalTime || performance.now();
              _gw.lastFrameTime = _gw.currentFrameTime || performance.now();
              _gw.currentFrameTime = performance.now();
            }
          }
        }
      },

      update: function () {
        this.game.update(this.currentFrameTime - this.lastFrameTime);
      },

      render: function () {
        var _gameWindow = this;
        render(createRenderContext());

        function render(renderContext) {
          _gameWindow.game.render(renderContext);
          debugFrameInfo(renderContext.context);

          function debugFrameInfo(ctx) {
            ctx.font = '30px Arial';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(
              "FPS " + _gameWindow.lastFpsCount + ' dt:' +
                (_gameWindow.currentFrameTime - _gameWindow.lastFrameTime),
              20,
              50
            );
          }
        }

        function createRenderContext() {
          return {
            context: _gameWindow.screen.getContext('2d'),
            screen: {
              width: _gameWindow.screen.width,
              height: _gameWindow.screen.height
            }
          };
        }
      },

      isRunning: function () {
        return running;
      },

      stop: function () {
        running = false;
        this.game.stop();
      }
    }
  );

  function getScreen(screen, width, height) {
    var screen = document.getElementById(screen);
    screen.width = width;
    screen.height = height;
    return screen;
  }
};
