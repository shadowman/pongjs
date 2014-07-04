var Keyboard = function(element) {
	var self = this,
		currentKeysState = { };
	
	
	
	self._onKeyUp = function(event) {
		currentKeysState[event.keyCode] = false;
	};

	self._onKeyDown = function(event) {
		currentKeysState[event.keyCode] = true;
	};

	self.isKeyPressed = function(key) {
		return currentKeysState[key] ? currentKeysState[key] : false;
	};
	
	self._init = function(element) {
		element.addEventListener('keyup', self._onKeyUp, true);
		element.addEventListener('keydown', self._onKeyDown, true);
	};
	
	self._init(element);

	return self;
};

Keyboard.getGlobalKeyboard = function() {
	if (!this.instance) {
		this.instance = new Keyboard(window);
	}
	return self.instance;
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