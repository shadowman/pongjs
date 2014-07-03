var Player = function(position) {
	var self = this, 
	    _hasTheBall = false;
	
	self._init = function(position) {
		self.score 		= 0;
		self.position 	= position;
		self.width 		= 15;
		self.height 	= 60;

		_hasTheBall = false;
	};

	self.render = function(rctxt) {
		var context = rctxt.context;

		context.beginPath();
		context.fillStyle = '#FFFFFF';
		context.rect(
			self.position.e(1) - self.width / 2, 
			self.position.e(2) - self.height / 2, 
			self.width, 
			self.height
		);
		context.fill();
		context.closePath();
	};

	self.update = function(dt) {

	};

	self.hasTheBall = function() {
		return _hasTheBall;
	};

	self.recieveTheBall = function() {
		_hasTheBall = true;
	};

	self._init(position);

	return self;
};