var Game = function Game(courtWidth, courtHeight) {
	var self = this;
	
	this.physics 	= physics;
	this.entities 	= [];
	this.players 	= [];

	configure(courtWidth, courtHeight);
		
	this.update = function(dt) {
		for (var idx = 0; idx < this.entities.length; idx++) {
			var entity 	= this.entities[idx];
			entity 		= this.physics.integrate(dt, entity);
			if (entity.update) 
				entity.update(dt);
		}
	};

	this.render = function(context) {		
		clear(context);
		
		for (var idx = 0; idx < this.entities.length; idx++) {
			var entity = this.entities[idx];
			if (entity.render) {
				entity.render(context);
			}
		}

		function clear (context) {
			var ctx = context.context;
			ctx.fillStyle 	= '#000000';
			ctx.fillRect(0, 0, context.screen.width, context.screen.height);
		}
	};

	this.getScoreForPlayer = function(playerNumber) {
		return this.players[playerNumber].score;
	};

	this.start = function() {
		this.players[0].recieveTheBall();
	};

	this.stop = function() {
	};

	function configure (courtWidth, courtHeight) {
		configureCourt();
		configurePlayerOne();
		configurePlayerTwo();

		function configureCourt () {
			self.court 		= new Court(courtWidth, courtHeight, $V([5,5]));
			self.entities.push(self.court);
		};

		function configurePlayerOne() {
			var controllerBehavior = new KeyboardControlledBehavior();
			var player = new Player(
				$V([
					self.court.position.e(1) + 20, 
					courtHeight / 2
				]),
				controllerBehavior
			);

			controllerBehavior.addKeyMapping(player, 'moveLeft', Keyboard.keys.LEFT);
			controllerBehavior.addKeyMapping(player, 'moveRight', Keyboard.keys.RIGHT);
			controllerBehavior.addKeyMapping(player, 'throwBall', Keyboard.keys.SPACE);

			self.players.push(player);
			self.entities.push(self.players[0]);
		};

		function configurePlayerTwo() {
			self.players.push(
				new Player(
					$V([
						self.court.position.e(1) - 20 + courtWidth, 
						courtHeight / 2
					]),
					new KeyboardControlledBehavior()
				)
			);
			self.entities.push(self.players[1]);
		};
	};
}