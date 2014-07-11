var Ball = function(position, color, radius) {
	init(this);
	
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

	function init (self) {
		self.radius = radius || 10;
		self.color = color ? color.toLowerCase() : '#ff0000';
		self.position = position ? $V(position) : $V([0,0]);
		self.velocity = $V([0, 0]);
	}
};