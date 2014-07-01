var Ball = function() {
	var self = this;
	
	self.render = function(context) {
		var rctx = context.context;
		rctx.beginPath();
		rctx.fillStyle = 'red';
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

	self._init = function() {
		self.radius = 10;
		self.position = Sylvester.Vector.Zero(2);
		self.velocity = Sylvester.Vector.Zero(2);
	};
	self._init();

	return self;
};