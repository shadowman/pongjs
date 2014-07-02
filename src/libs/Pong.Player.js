var Player = function(game) {
	var self = this, 
	    _hasTheBall = false,
	    _game;
	
	self._init = function(game) {
		self.score 	= 0;
		_hasTheBall = false;
		_game 		= game;
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

	self._init();

	return self;
};