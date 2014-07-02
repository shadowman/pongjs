describe('Court', function() {
	var court;

	beforeEach(function() {
		court = new Court(300, 200);
	});
	
	it('should have a given width', function() {
		expect(court.width).toBe(300);
	});


	it('should have a given height', function() {
		expect(court.height).toBe(200);
	});
})