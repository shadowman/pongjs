describe('KeyboardControledBehavior', function() {
	var component,
		target,
		keyboard, 
		mappings;

	beforeEach(function(){
		keyboard  = jasmine.createSpyObj('Keyboard', ['isKeyPressed']);
		target    = jasmine.createSpyObj('Target', ['throwBall', 'moveLeft', 'moveRight']);
		mappings  = [
		{
			target: target,
			keys: [Keyboard.keys.LEFT],
			action: 'moveLeft' 
		},
		{
			target: target,
			keys: [Keyboard.keys.RIGHT],
			action: 'moveRight'
		}];
		component = new KeyboardControlledBehavior(keyboard, mappings);
	});

	it('should map specific key to state modifications', function() {
		mappings = [{
			target: target,
			keys: [Keyboard.keys.SPACE],
			action: 'throwBall' 
		}];
		component = new KeyboardControlledBehavior(keyboard, mappings);
		keyboard.isKeyPressed.and.returnValue(true);
		expect(target.throwBall).not.toHaveBeenCalled();

		component.update(16);

		expect(target.throwBall).toHaveBeenCalled();
		expect(keyboard.isKeyPressed).toHaveBeenCalledWith(Keyboard.keys.SPACE);
	});
	
	it('should map multiple specific keys combination to state modifications', function() {
		mappings = [{
			target: target,
			keys: [Keyboard.keys.CTRL, Keyboard.keys.Q],
			action: 'moveRight' 
		}];
		component = new KeyboardControlledBehavior(keyboard, mappings);
		keyboard.isKeyPressed.and.returnValue(true);
		expect(target.moveRight).not.toHaveBeenCalled();

		component.update(16);

		expect(target.moveRight).toHaveBeenCalled();
		expect(keyboard.isKeyPressed.calls.argsFor(0)).toEqual([Keyboard.keys.CTRL]);
		expect(keyboard.isKeyPressed.calls.argsFor(1)).toEqual([Keyboard.keys.Q]);
	});

	it('should only execute mapped behavior when key in pressed state', function() {
		mappings = [{
			target: target,
			keys: [Keyboard.keys.CTRL, Keyboard.keys.Q],
			action: 'moveRight' 
		}];
		component = new KeyboardControlledBehavior(keyboard, mappings);
		keyboard.isKeyPressed.and.returnValue(false);
		expect(target.moveRight).not.toHaveBeenCalled();

		component.update(16);

		expect(target.moveRight).not.toHaveBeenCalled();
	});
});
