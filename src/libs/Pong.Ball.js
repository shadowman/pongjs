/*
var Ball = function(position, color, radius) {
	var self = this;
	
	self.render = function(context) {
		var rctx = context.context;
		rctx.beginPath();
		rctx.fillStyle = self.color;
		rctx.arc(
			self.position.e(1), 
			self.position.e(2), 
			self.radius, 
			0, 
			2 * Math.PI, 
			false
		);
		rctx.fill();
		rctx.closePath();
	};

	self.update = function(dt) {

	};

	self._init = function(position, color, radius) {
		self.radius 	= radius || 10;
		self.color 		= color ? color.toLowerCase() : '#ff0000';
		self.position 	= position ? $V(position) : $V([0,0]);
		self.velocity 	= $V([0, 0]);
	};

	self._init(position, color, radius);

	return self;
};
*/

var Ball = function(position, color, radius) {	
	this.radius 	= radius || 10;
	this.color 		= color ? color.toLowerCase() : '#ff0000';
	this.position 	= position ? $V(position) : $V([0,0]);
	this.velocity 	= $V([0, 0]);

	this.render = function(context) {
		var rctx = context.context;
		rctx.beginPath();
		rctx.fillStyle = this.color;
		rctx.arc(
			this.position.e(1), 
			this.position.e(2), 
			this.radius, 
			0, 
			2 * Math.PI, 
			false
		);
		rctx.fill();
		rctx.closePath();
	};

	this.update = function(dt) {

	};
};

