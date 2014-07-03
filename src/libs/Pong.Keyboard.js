var Keyboard = function(element) {
	var self = this,
		currentKeysState = { };
	
	self.keys = {
		SPACE : 32,
		LEFT  : 0,
		RIGHT : 0
	};
	
	self._onKeyUp = function(event) {
		currentKeysState[key] = false;
	};

	self._onKeyDown = function(event) {
		currentKeysState[event.keyCode] = true;
	};

	self.isKeyPressed = function(key) {
		return currentKeysState[key] ? currentKeysState[key] : false;
	};
	
	self._init = function(element) {
		element.addEventListener('onkeyup', self._onKeyUp, true);
		element.addEventListener('onkeyup', self._onKeyDown, true);
	};
	
	self._init(element);

	return self;
};