var Player = function(position, components) {
	var self = this, 
	    _hasTheBall = false,
	    _components = [];
	
	self._init = function(position, components) {
		self.score 		  = 0;
		self.position 	  = position;
		self.acceleration = $V([0,0]);
		self.velocity 	  = $V([0,0]);
		self.width 		= 15;
		self.height 	= 60;

		_hasTheBall = false;
		_components = _components.concat(components || []);
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
		for (var i = 0; i < _components.length; i++) {
			var component = _components[i];
			if (component.update) 
				component.update(dt);
		}
	};

	self.hasTheBall = function() {
		return _hasTheBall;
	};

	self.recieveTheBall = function() {
		_hasTheBall = true;
	};

	self.moveLeft = function () {
		self.position = self.position.add($V([0, -2]));
	};

	self.moveRight = function () {
		self.position = self.position.add($V([0, 2]));
	};

	self._init(position, components);

	return self;
};