describe('Keyboard', function() {

	beforeEach(function() {
		keyboard = new Keyboard(window);
	});

	it('should bind all key events', function() {
		expect(window.onkeydown).not.toBeNull();
		expect(window.onkeyup).not.toBeNull();
	});

	it('should reflect the state of the keyboard on keydown', function() {
		expect(keyboard.isKeyPressed(Keyboard.keys.SPACE)).toBe(false);

		window.onkeydown({});

		expect(keyboard.isKeyPressed(Keyboard.keys.SPACE)).toBe(true);
	});

	it('should reflect the state of the keyboard on keyup', function() {
		window.onkeydown({});
		window.onkeyup({});

		expect(keyboard.isKeyPressed(Keyboard.keys.SPACE)).toBe(false);
	});
});