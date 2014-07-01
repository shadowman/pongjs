window.onload = function() {
	var game = new Game();
	var w = new GameWindow('viewport', 640, 480, game);
	
	w.run();
};