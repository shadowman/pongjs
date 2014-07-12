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

    KeyboardTestsHelper.keydown(Keyboard.keys.SPACE);

    expect(keyboard.isKeyPressed(Keyboard.keys.SPACE)).toBeTruthy();
  });

  it('should reflect the state of the keyboard on keyup', function () {
    KeyboardTestsHelper.keydown(Keyboard.keys.SPACE);
    KeyboardTestsHelper.keyup(Keyboard.keys.SPACE);

    expect(keyboard.isKeyPressed(Keyboard.keys.SPACE)).toBeFalsy();
  });

  it('should act as a singleton as well as non-singleton', function () {
    var keyboard1 = Keyboard.getGlobalKeyboard(),
      keyboard2 = Keyboard.getGlobalKeyboard();

    expect(keyboard1).not.toBeNull();
    expect(keyboard1).not.toBeUndefined();
    expect(keyboard1).toEqual(keyboard2);
  })
});