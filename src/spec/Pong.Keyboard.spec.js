'use strict';

describe('Keyboard', function () {
  var keyboard;

  beforeEach(function () {
    keyboard = new Keyboard(window);
  });

  it('should bind all key events', function () {
    spyOn(window, 'addEventListener');

    keyboard = new Keyboard(window);

    expect(window.addEventListener.calls.argsFor(0)[0]).toBe('keyup');
    expect(window.addEventListener.calls.argsFor(1)[0]).toBe('keydown');
  });

  it('should reflect the state of the keyboard on keydown', function () {
    expect(keyboard.isKeyPressed(Keyboard.keys.SPACE)).toBeFalsy();

    keydown(Keyboard.keys.SPACE);

    expect(keyboard.isKeyPressed(Keyboard.keys.SPACE)).toBeTruthy();
  });

  it('should reflect the state of the keyboard on keyup', function () {
    keydown(Keyboard.keys.SPACE);
    keyup(Keyboard.keys.SPACE);

    expect(keyboard.isKeyPressed(Keyboard.keys.SPACE)).toBeFalsy();
  });

  it('should act as a singleton as well as non-singleton', function () {
    var keyboard1 = Keyboard.getGlobalKeyboard(),
      keyboard2 = Keyboard.getGlobalKeyboard();

    expect(keyboard1).not.toBeNull();
    expect(keyboard1).not.toBeUndefined();
    expect(keyboard1).toEqual(keyboard2);
  })

  function keydown(k) {
    var oEvent = document.createEvent('KeyboardEvent');

    // Chromium Hack
    Object.defineProperty(oEvent, 'keyCode', {
      get: function () {
        return this.keyCodeVal;
      }
    });
    Object.defineProperty(oEvent, 'which', {
      get: function () {
        return this.keyCodeVal;
      }
    });

    if (oEvent.initKeyboardEvent) {
      oEvent.initKeyboardEvent("keydown", true, true, document.defaultView, false, false, false, false, k, k);
    } else {
      oEvent.initKeyEvent("keydown", true, true, document.defaultView, false, false, false, false, k, 0);
    }

    oEvent.keyCodeVal = k;

    if (oEvent.keyCode !== k) {
      alert("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
    }

    document.dispatchEvent(oEvent);
  };

  function keyup(k) {
    var oEvent = document.createEvent('KeyboardEvent');

    // Chromium Hack
    Object.defineProperty(oEvent, 'keyCode', {
      get: function () {
        return this.keyCodeVal;
      }
    });
    Object.defineProperty(oEvent, 'which', {
      get: function () {
        return this.keyCodeVal;
      }
    });

    if (oEvent.initKeyboardEvent) {
      oEvent.initKeyboardEvent("keyup", true, true, document.defaultView, false, false, false, false, k, k);
    } else {
      oEvent.initKeyEvent("keyup", true, true, document.defaultView, false, false, false, false, k, 0);
    }

    oEvent.keyCodeVal = k;

    if (oEvent.keyCode !== k) {
      alert("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
    }

    document.dispatchEvent(oEvent);
  }
});