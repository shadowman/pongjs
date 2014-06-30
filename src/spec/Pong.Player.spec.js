describe('Player', function(){
	var player;

	beforeEach(function() {
		player = new Player();	
	});

	it('should have a zero score when first created', function() {
		expect(player.score).toBe(0);
	});

	it('should render itself as a rectangle when render gets called');
});