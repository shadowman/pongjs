var KeyboardControlledBehavior = function (keymaps, keyboard) {
  var keyboardControl = keyboard || Keyboard.getGlobalKeyboard(),
    mappings = keymaps || [];

  this.addKeyMapping = function (target, action, keys) {
    if (keys !== null && !(keys instanceof Array)) {
      keys = [keys];
    }
    mappings = mappings.concat(
      { target: target, action: action, keys: keys }
    );
  };

  this.update = function (dt) {
    for (var i = 0; i < mappings.length; i++) {
      var mapping = mappings[i];
      if (checkKeysPressed(mapping.keys)) {
        mapping.target[mapping.action]();
      }
    }

    function checkKeysPressed(keys) {
      var allPressed = true;
      for (var i = 0; i < keys.length; i++) {
        allPressed = allPressed && keyboardControl.isKeyPressed(keys[i]);
      }
      return allPressed;
    }
  };
};