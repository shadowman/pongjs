var Player = function(position) {
	var self = this, 
	    _hasTheBall = false;
	
	self._init = function(position) {
		self.score 	= 0;
		self.position = position;
		_hasTheBall = false;
	};

	self.render = function(context) {

	};

	self.update = function(dt) {

	};

	self.hasTheBall = function() {
		return _hasTheBall;
	};

	self.giveTheBall = function() {
		_hasTheBall = true;
	};

	self._init(position);

	return self;
};