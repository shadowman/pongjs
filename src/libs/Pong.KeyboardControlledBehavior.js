var KeyboardControlledBehavior = function(keymaps, keyboard) {
	var self = this,
		keyboardControl, 
		mappings;

	self._init = function(keyboard, keymaps) {
		mappings 		= keymaps  || [];
		keyboardControl = keyboard || Keyboard.getGlobalKeyboard();
	};
	
	self.update = function(dt) {
		for(var i =0; i < mappings.length; i++) {
			var mapping = mappings[i];
			if (self._checkKeysPressed(mapping.keys)) {
				mapping.target[mapping.action]();
			}
		}
	};

	self._checkKeysPressed = function(keys) {
		var allPressed = true;
		for (var i=0; i < keys.length; i++ ) {
			allPressed = allPressed && keyboardControl.isKeyPressed(keys[i]);
		}
		return allPressed;
	};

	self.addKeyMapping = function(target, action, keys) {
		mappings = mappings.concat(
			{ target: target, action: action, keys: keys }
		);	
	};

	self._init(keyboard, keymaps);

	return self;
};