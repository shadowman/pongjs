describe('Player', function(){
	var player;

	beforeEach(function() {
		player = new Player($V([0,0]));	
	});

	it('should have a zero score when first created', function() {
		expect(player.score).toBe(0);
	});

	it('should render itself as a rectangle when render gets called');
	
	it('should be initialized with a starting position', function() {
		expect(player.position).toEqual($V([0,0]))
	});

	it('should start without the ball', function () {
		expect(player.hasTheBall()).toBe(false);
	});

	it('should know if it has the ball', function() {
		expect(player.hasTheBall()).toBe(false);

		player.giveTheBall();

		expect(player.hasTheBall()).toBe(true);
	});

	it('should be able to recieve the ball', function() {
		player.giveTheBall();

		expect(player.hasTheBall()).toBe(true);
	});

});