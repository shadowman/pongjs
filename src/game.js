window.onload = function() {
	var game = new Game(640, 480);
	var w = new GameWindow('viewport', 640, 480, game);
	
	w.run();
};