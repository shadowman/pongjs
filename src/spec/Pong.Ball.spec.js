describe('Ball', function() {
	var ball;

	beforeEach(function() {
		ball = new Ball();	
	});

	it('should initialize its position at <0,0>', function() {
		expect(ball.position).toEqual(Sylvester.Vector.Zero(2));
	});
	it('should initialize its radius at 10', function() {
		expect(ball.radius).toBe(10);
	});

	it('should initialize its velocity vector with <0,0> random value', function() {
		expect(ball.velocity).toEqual(Sylvester.Vector.Zero(2));
	});
	
	it('should render itself as a circle when render gets called', function() {
		var rctx = RenderingTestsHelper.create2dRenderContext();
		var context = rctx.context;
		spyOn(context, 'arc');
		spyOn(context, 'fill');
		
		ball.render(rctx)
		
		expect(context.arc.calls.any()).toBe(true);
		expect(context.fill.calls.any()).toBe(true);
	});

});