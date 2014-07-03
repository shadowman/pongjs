var Court = function(width, height, position) {
	var self = this;
	
	self._init = function(width, height, position) {
		self.width 		= width;
		self.height 	= height;
		self.position 	= position;
	};


	self.render = function(rctxt) {
		self._renderFloor(rctxt);
		self._renderNet(rctxt);
	};

	self._renderFloor = function(rctxt) {
		var context = rctxt.context;

		context.beginPath();
		context.fillStyle = '#000000';
		context.strokeStyle = '#FFFFFF';		
		context.lineWidth = 5;
		context.rect(
			self.position.e(1), self.position.e(2), self.width, self.height
		);
		context.fill();
		context.stroke();
		context.closePath();
	};
	
	self._renderNet = function(rctxt) {
		var context = rctxt.context;
		context.beginPath();
		context.strokeStyle = '#FFFFFF';		
		context.lineWidth = 5;
		context.moveTo(self.position.e(1) + self.width / 2, self.position.e(2));
		context.lineTo(self.position.e(1) + self.width / 2, self.position.e(2) + height);
		context.stroke();
		context.closePath();
	};

	self.udpate = function(dt) {

	};

	self._init(width, height, position);
	return self;
};