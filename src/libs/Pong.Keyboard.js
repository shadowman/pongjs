var Keyboard = function (element) {
  var currentKeysState = {};

  addEventListeners(element);

  this.isKeyPressed = function (key) {
    return currentKeysState[key] ? currentKeysState[key] : false;
  };

  function addEventListeners(element) {
    element.addEventListener('keyup', onKeyUp, true);
    element.addEventListener('keydown', onKeyDown, true);

    function onKeyUp(event) {
      currentKeysState[event.keyCode] = false;
    }

    function onKeyDown(event) {
      currentKeysState[event.keyCode] = true;
    }
  }
};

Keyboard.getGlobalKeyboard = function () {
  if (!this.instance) {
    this.instance = new Keyboard(window);
  }
  return this.instance;
};

Keyboard.keys = {
  SPACE: 32,
  LEFT: 37,
  RIGHT: 39,
  CTRL: 17,
  Q: 81,
  A: 65,
  D: 68,
  SHIFT: 16,
  ALT: 18
};