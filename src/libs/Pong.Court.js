var Court = function(width, height) {
	var self = this;
	
	self._init = function(width, height) {
		self.width = width;
		self.height = height;
		self.BORDER_PADDING = 5;
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
			self.BORDER_PADDING, 
			self.BORDER_PADDING, 
			self.width - 2 * self.BORDER_PADDING, 
			self.height - 2 * self.BORDER_PADDING
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
		context.moveTo(self.width / 2, self.BORDER_PADDING);
		context.lineTo(self.width / 2, height - self.BORDER_PADDING );
		context.stroke();
		context.closePath();
	};

	self.udpate = function(dt) {

	};

	self._init(width, height);
	return self;
};