var fs = require('fs');
var jsdom = require("jsdom");

var codeUnderTest = fs.readFileSync('libs/Pong.GameWindow.js','utf-8');
eval(codeUnderTest);

window = jsdom.jsdom('<html><head></head><body><canvas id="viewport"></canvas></body></html>').createWindow();
if(Object.keys(window).length === 0) {
    // this hapens if contextify, one of jsdom's dependencies doesn't install correctly
    // (it installs different code depending on the OS, so it cannot get checked in.);
    throw "jsdom failed to create a usable environment, try uninstalling and reinstalling it";
}
global.window = window;
global.document = window.document;

describe('GameWindow', function(){
	it('should set the canvas to the provided width and height on creation', function() {
		var game = new GameWindow('viewport', 200, 300);

		expect(game.screen.width).toBe(200);
		expect(game.screen.height).toBe(300);
	});

	it('should find the element with the id viewport on creation', function() {
		var game = new GameWindow('viewport', 200, 300);

		expect(game.screen.id).toBe('viewport');
	});

	it('should be stopped when created for the first time', function() {
		fail();
	});

	it('should run the game loop when run gets called', function() {
		fail();
	});

	it('should stop the game loop when stop gets called', function(){
		fail();
	});

});