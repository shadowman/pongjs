var PhysicsTestsHelper = PhysicsTestsHelper || {
	createPhysicsObject: function() {
		return {
			position: Sylvester.Vector.Zero(2),
			velocity: Sylvester.Vector.Zero(2),
			acceleration: Sylvester.Vector.Zero(2)
		}
	}
};