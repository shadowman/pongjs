var Court = function(width, height, position) {
	
	this.width 		= width;
	this.height 	= height;
	this.position 	= position;


	this.render = function(rctxt) {
		var self = this;
		renderFloor(rctxt);
		renderNet(rctxt);

		function renderFloor (rctxt) {
			var context = rctxt.context;

			context.beginPath();
			context.fillStyle = '#000000';
			context.strokeStyle = '#FFFFFF';		
			context.lineWidth = 5;
			context.rect(
				self.position.e(1), self.position.e(2), self.width, self.height
			);
			context.fill();
			context.stroke();
			context.closePath();
		};
		
		function renderNet (rctxt) {
			var context = rctxt.context;
			context.beginPath();
			context.strokeStyle = '#FFFFFF';		
			context.lineWidth = 5;
			context.moveTo(self.position.e(1) + self.width / 2, self.position.e(2));
			context.lineTo(self.position.e(1) + self.width / 2, self.position.e(2) + height);
			context.stroke();
			context.closePath();
		};
	};


	this.udpate = function(dt) {

	};
};