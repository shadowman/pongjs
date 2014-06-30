var Game = function Game() {
	var self = this;
	
	self.update = function(dt) {

	};

	self.render = function(context) {
		var ctx = context.context;
		ctx.fillStyle 	= '#000000';
		ctx.fillRect(0,0, context.screen.width, context.screen.height);
	};
}