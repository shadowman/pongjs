describe('Pong', function() {
	it('should start with the main menu');
	it('should start with one human player if one player selected');
	it('should start with two human players if two players selected');
	it('gives tha ball to player one on first round');
	it('gives the ball to the winner of the previous round on all rounds except the first');
	it('adds one point to the score of player one when player two misses the ball');
	it('adds one point to the score of player two when player one misses the ball');
	it('should allow the ball to bounce off the side walls');
	it('should allow the ball to bounce off the player');
	it('ends the game when a player gets to 10 points');
	it('shows the final score when a player wins');
	it('shows the main menu when the final score is displayed and key is pressed');
});