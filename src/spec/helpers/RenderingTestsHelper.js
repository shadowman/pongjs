var RenderingTestsHelper = RenderingTestsHelper || {
	create2dRenderContext: function() {
		var canvas = document.createElement('canvas');
		canvas.width = 300;
		canvas.height = 200;

		return {
			context: canvas.getContext('2d'),
			screen: {
				width: 		canvas.width,
				height: 	canvas.height
			}
		};
	}
};