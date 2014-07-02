var Game = function Game() {
	var self = this;
		
	self.update = function(dt) {
		for (var idx = 0; idx < self.entities.length; idx++) {
			var entity 	= self.entities[idx];
			entity 		= self.physics.integrate(dt, entity);
			if (entity.update) 
				entity.update(dt);
		}
	};

	self.render = function(context) {		
		self._clear(context);
		for (var idx = 0; idx < self.entities.length; idx++) {
			var entity = self.entities[idx];
			if (entity.render) entity.render(context);
		}
	};

	self._clear = function(context) {
		var ctx = context.context;
		ctx.fillStyle 	= '#000000';
		ctx.fillRect(0,0, context.screen.width, context.screen.height);
	};

	self.getScoreForPlayer = function(playerNumber) {
		return self.players[playerNumber].score;
	};

	self.start = function() {
		self.entities.push(
			new Ball()
		);
	};

	self.stop = function() {
	
	};

	self._init = function() {
		self.physics 	= new Physics(); 
		self.entities 	= [];
		self.players 	= [];

		self.players.push(new Player());
		self.players.push(new Player());

		self.entities.push(self.players[0]);
		self.entities.push(self.players[1]);
	};

	self._init();

	return this;
}