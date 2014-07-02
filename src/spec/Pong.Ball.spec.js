describe('Ball', function() {
	var ball;

	beforeEach(function() {
		ball = new Ball();	
	});

	it('should initialize its position at <1,1> as provided position coordinates', function() {
		ball = new Ball([1,1]);

		expect(ball.position).toEqual($V([1,1]));
	});

	it('should initialize its color with #0000ff as provided', function() {
		ball = new Ball([1,1], '#0000ff');

		expect(ball.color).toBe('#0000ff');
	});
	it('should initialize its color with red as provided', function() {
		expect(ball.color).toBe('#ff0000');
	});
	it('should initialize its position at <0,0>', function() {
		expect(ball.position).toEqual(Sylvester.Vector.Zero(2));
	});
	it('should initialize its radius at 10', function() {
		expect(ball.radius).toBe(10);
	});

	it('should initialize its radius at 20 as provided', function() {
		ball = new Ball([1,1], '#0000ff', 20);

		expect(ball.radius).toBe(20);
	});

	it('should initialize its velocity vector with <0,0>', function() {
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

	it('should render itself in the color provided when render gets called', function() {
		var rctx = RenderingTestsHelper.create2dRenderContext();
		var context = rctx.context;
		
		ball.render(rctx)
		
		expect(context.fillStyle).toBe(ball.color);
	});

});