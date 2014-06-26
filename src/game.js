var GameWindow = GameWindow || function(screen, width, height) {
	'use strict';
	var self 	 = this,
		running  = false,
		fpsCount = 0
		screen;

	this._init = function(screen, width, height) {
		self.screen = document.getElementById(screen);
		self.screen.width  = width;
		self.screen.height = height;
	};
	
	this.run = function() {
		running = true;
		self._run();
	};

	this.update = function() {
	};

	this._update = function(dt) {
	};

	this._updateFrameTimes = function() {
		self.lastFrameTime 		= self.lastFrameTime || performance.now();
		self.currentFrameTime 	= performance.now();
	};

	this.render = function() {
		var ctx = self.screen.getContext('2d');
		self._render(ctx);
		self._updateFps();
		self._debugFrameInfo(ctx);
	};

	this._render = function(ctx) {
		ctx.fillStyle 	= '#000000';
		ctx.fillRect(0,0, self.screen.width, self.screen.height);
	};

	this._debugFrameInfo = function(ctx) {
		ctx.font 		= '30px Arial';
		ctx.fillStyle 	= '#FFFFFF';
		ctx.fillText("FPS " + self.lastFpsCount, 20, 50);
	};

	this._run = function() {
		if (running) {
			window.requestAnimationFrame(self._run);
			self.update();
			self.render();
		}
	};

	this._updateFps = function() {
		self._updateFrameTimes();
		if (self.currentFrameTime - self.lastFrameTime > 1000) {
			self.lastFpsCount = self.fpsCount;
			self.fpsCount = 0;
			self.lastFrameTime = self.currentFrameTime;
		}
		self.fpsCount++;
	};

	this._init(screen, width, height);

	return this;
};

window.onload = function() {
	var game = new GameWindow('viewport', 640, 480);
	game.run();
};