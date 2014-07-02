var Court = function(width, height) {
	var self = this;
	
	self._init = function(width, height) {
		self.width = width;
		self.height = height;
	};
	self._init(width, height);
	return self;
};