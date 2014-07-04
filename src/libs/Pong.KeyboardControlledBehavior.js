var KeyboardControlledBehavior = function(keyboard, keymaps) {
	var self = this,
		keyboardControl, 
		mappings;

	self._init = function(keyboard, keymaps) {
		mappings = keymaps;
		keyboardControl = keyboard;
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

	self._init(keyboard, keymaps);

	return self;
};