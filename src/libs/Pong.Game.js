var Game = function Game(courtWidth, courtHeight) {
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
		ctx.fillRect(0, 0, context.screen.width, context.screen.height);
	};

	self.getScoreForPlayer = function(playerNumber) {
		return self.players[playerNumber].score;
	};

	self.start = function() {
		self.players[0].recieveTheBall();
	};

	self.stop = function() {
	};

	self._init = function(courtWidth, courtHeight) {
		self.physics 	= new Physics(); 
		self.entities 	= [];
		self.court 		= new Court(courtWidth, courtHeight, $V([5,5]));
		self.players 	= [];
		self.players.push(new Player($V([0, courtHeight / 2])));
		self.players.push(new Player($V([courtWidth, courtHeight / 2])));

		self.entities.push(self.court);
		self.entities.push(self.players[0]);
		self.entities.push(self.players[1]);
	};

	self._init(courtWidth, courtHeight);

	return this;
}