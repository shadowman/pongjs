describe('Player', function(){
	var player;

	beforeEach(function() {
		player = new Player($V([0,0]));	
	});

	it('should have a zero score when first created', function() {
		expect(player.score).toBe(0);
	});

	it('should render itself as a rectangle when render gets called relative to the player position', function() {
		var context = RenderingTestsHelper.create2dRenderContext();
		var rctxt = context.context;
		spyOn(rctxt, 'beginPath');
		spyOn(rctxt, 'rect');
		spyOn(rctxt, 'fill');
		spyOn(rctxt, 'closePath');
		
		player.render(context);

		expect(rctxt.beginPath.calls.any()).toBe(true);
		expect(rctxt.rect.calls.argsFor(0)).toEqual([player.position.e(1) - player.width / 2, player.position.e(2) - player.height / 2, player.width, player.height]);
		expect(rctxt.fill.calls.any()).toBe(true);
		expect(rctxt.closePath.calls.any()).toBe(true);
	});
	
	it('should be initialized with a starting position', function() {
		expect(player.position).toEqual($V([0,0]))
	});

	it('should start without the ball', function () {
		expect(player.hasTheBall()).toBe(false);
	});

	it('should know if it has the ball', function() {
		expect(player.hasTheBall()).toBe(false);

		player.recieveTheBall();

		expect(player.hasTheBall()).toBe(true);
	});

	it('should be able to recieve the ball', function() {
		player.recieveTheBall();

		expect(player.hasTheBall()).toBe(true);
	});

	it('should call all his components update on his own update', function() {
		var behavior = jasmine.createSpyObj('KeyboardControlledBehavior', ['update']);
		player = new Player($V([0,0]), [behavior, behavior]);

		player.update(0);
		
		expect(behavior.update.calls.count()).toBe(2);
	});

});