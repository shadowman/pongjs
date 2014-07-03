describe('Court', function() {
	var court;

	beforeEach(function() {
		court = new Court(300, 200, $V([10,0]));
	});
	
	it('should have a given width', function() {
		expect(court.width).toBe(300);
	});


	it('should have a given height', function() {
		expect(court.height).toBe(200);
	});

	it('should render the floor when render gets called at the current position', function() {
		var context = RenderingTestsHelper.create2dRenderContext();
		var rctxt = context.context;
		spyOn(rctxt, 'beginPath');
		spyOn(rctxt, 'rect');
		spyOn(rctxt, 'fill');
		spyOn(rctxt, 'stroke');
		spyOn(rctxt, 'closePath');
		
		court.render(context);

		expect(rctxt.beginPath.calls.any()).toBe(true);
		expect(rctxt.rect.calls.argsFor(0)).toEqual([court.position.e(1), court.position.e(2), court.width, court.height]);
		expect(rctxt.fill.calls.any()).toBe(true);
		expect(rctxt.lineWidth).toBe(5);
		expect(rctxt.stroke.calls.any()).toBe(true);
		expect(rctxt.closePath.calls.any()).toBe(true);
	});

	it('should render the net when render gets called from the current position', function() {
		var context = RenderingTestsHelper.create2dRenderContext();
		var rctxt = context.context;
		spyOn(rctxt, 'beginPath');
		spyOn(rctxt, 'moveTo');
		spyOn(rctxt, 'lineTo');
		spyOn(rctxt, 'stroke');

		court.render(context);

		expect(rctxt.beginPath.calls.any()).toBe(true);
		expect(rctxt.moveTo.calls.argsFor(0)).toEqual([court.width / 2 + court.position.e(1), court.position.e(2) + 0]);
		expect(rctxt.lineTo.calls.argsFor(0)).toEqual([court.width / 2 + court.position.e(1), court.position.e(2) + court.height]);
		expect(rctxt.stroke.calls.any()).toBe(true);
	});
})