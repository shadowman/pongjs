window.onload = function() {
	var game = new Game(630, 470);
	var w = new GameWindow('viewport', 640, 480, game);
	
	w.run();
};