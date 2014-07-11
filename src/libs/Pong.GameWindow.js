'use strict';

var GameWindow = GameWindow || function (screen, width, height, game) {
  var running = false,
    fpsCount = 0;

  this.screen = document.getElementById(screen);
  this.screen.width = width;
  this.screen.height = height;
  this.game = game;

  this.run = function () {
    var _gameWindow = this;
    running = true;
    this.game.start();
    run();

    function run() {
      if (running) {
        window.requestAnimationFrame(run);
        updateFps();
        _gameWindow.update();
        _gameWindow.render();
      }

      function updateFps() {
        updateFrameTimes();
        if (_gameWindow.currentFrameTime - _gameWindow.lastFrameRateIntervalTime > 1000) {
          _gameWindow.lastFpsCount = _gameWindow.fpsCount;
          _gameWindow.fpsCount = 0;
          _gameWindow.lastFrameRateIntervalTime = _gameWindow.currentFrameTime;
        }
        _gameWindow.fpsCount++;

        function updateFrameTimes() {
          _gameWindow.lastFrameRateIntervalTime = _gameWindow.lastFrameRateIntervalTime || performance.now();
          _gameWindow.lastFrameTime = _gameWindow.currentFrameTime || performance.now();
          _gameWindow.currentFrameTime = performance.now();
        }
      }
    }
  };

  this.update = function () {
    this.game.update(this.currentFrameTime - this.lastFrameTime);
  };

  this.render = function () {
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
  };

  this.isRunning = function () {
    return running;
  };

  this.stop = function () {
    running = false;
    this.game.stop();
  };
};
