var GameWindow = GameWindow || function(screen, width, height, game) {
	'use strict';
	var self 	 = this,
		running  = false,
		fpsCount = 0;

	this._init = function(screen, width, height, game) {
		self.screen = document.getElementById(screen);
		self.screen.width  = width;
		self.screen.height = height;
		self.game = game;
	};
	
	this.run = function() {
		running = true;
		self._run();
	};

	this.update = function() {
		self._update(self.currentFrameTime - self.lastFrameTime);
	};

	this._update = function(dt) {
		self.game.update(dt);		
	};

	this._updateFrameTimes = function() {
		self.lastFrameRateIntervalTime 		= self.lastFrameRateIntervalTime || performance.now();
		self.lastFrameTime 					= self.currentFrameTime || performance.now();
		self.currentFrameTime 				= performance.now();
	};

	this.render = function() {
		self._render(self._createRenderContext());
	};

	this._createRenderContext = function() {
		return {
			context: self.screen.getContext('2d'),
			screen : {
				width: self.screen.width,
				height: self.screen.height
			}
		};
	};

	this._render = function(renderContext) {
		self.game.render(renderContext);		
		self._debugFrameInfo(renderContext.context);
	};

	this._debugFrameInfo = function(ctx) {
		ctx.font 		= '30px Arial';
		ctx.fillStyle 	= '#FFFFFF';
		ctx.fillText("FPS " + self.lastFpsCount + ' dt:' + (self.currentFrameTime - self.lastFrameTime), 20, 50);

	};

	this._run = function() {
		if (running) {
			window.requestAnimationFrame(self._run);
			self._updateFps();
			self.update();
			self.render();
		}
	};

	this._updateFps = function() {
		self._updateFrameTimes();
		if (self.currentFrameTime - self.lastFrameRateIntervalTime > 1000) {
			self.lastFpsCount = self.fpsCount;
			self.fpsCount = 0;
			self.lastFrameRateIntervalTime = self.currentFrameTime;
		}
		self.fpsCount++;
	};

	this.isRunning = function() {
		return running;
	};

	this.stop = function() {
		running = false;
	};

	this._init(screen, width, height, game);

	return this;
};
