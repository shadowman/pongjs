var Keyboard = function(element) {
	var currentKeysState = {};

	element.addEventListener('keyup', onKeyUp, false);
	element.addEventListener('keydown', onKeyDown, false);
	
	this.isKeyPressed = function(key) {
		return currentKeysState[key] ? currentKeysState[key] : false;
	};
	
	function onKeyUp (event) {
		currentKeysState[event.keyCode] = false;
	};

	function onKeyDown (event) {
		currentKeysState[event.keyCode] = true;
	};
};

Keyboard.getGlobalKeyboard = function() {
	if (!this.instance) {
		this.instance = new Keyboard(window);
	}
	return this.instance;
};

Keyboard.keys = {
	SPACE 		: 32,
	LEFT  		: 37,
	RIGHT 		: 39,
	CTRL  		: 17,
	Q  	  		: 81,
	A  	  		: 65,
	D  	  		: 68,
	SHIFT 		: 16,
	ALT 		: 18
};