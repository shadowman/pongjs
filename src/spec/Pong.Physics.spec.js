describe('Physics', function() {
	var physics;

	beforeEach(function() {
		physics = new Physics(); 
	});

	it('should integrate objects with no state as not moving', function() {
		var obj = { };
		var dt  = 16;
		// Sn = Sn-1 + Vn-1 * t + 1/2 a*t^2 = Sn-1
		obj = physics.integrate(dt, obj);	

		expect(obj.position).toEqual($V([0,0]))
	});

	it('should integrate objects with no acceleration or velocity', function() {
		var obj = PhysicsTestsHelper.createPhysicsObject();
		var dt  = 16;
		// Sn = Sn-1 + Vn-1 * t + 1/2 a*t^2 = Sn-1
		obj = physics.integrate(dt, obj);	

		expect(obj.position).toEqual($V([0,0]))
	});

	it('should integrate objects with acceleration', function() {
		var obj = PhysicsTestsHelper.createPhysicsObject();
		obj.acceleration = $V([1,0]);
		var dt  = 16;
		// Sn = Sn-1 + Vn-1 * t + 1/2 a*t^2 = Sn-1
		obj = physics.integrate(dt, obj);	

		expect(obj.position).toEqual($V([128,0]))
	});


	it('should integrate objects with velocity', function() {
		var obj = PhysicsTestsHelper.createPhysicsObject();
		obj.velocity = $V([1,0]);
		var dt  = 16;
		// Sn = Sn-1 + Vn-1 * t + 1/2 a*t^2 = Sn-1
		obj = physics.integrate(dt, obj);	

		expect(obj.position).toEqual($V([16,0]))
	});

	it('should integrate objects with position', function() {
		var obj = PhysicsTestsHelper.createPhysicsObject();
		obj.velocity = $V([1,0]);
		obj.position = $V([1,0]);
		var dt  = 16;
		// Sn = Sn-1 + Vn-1 * t + 1/2 a*t^2 = Sn-1
		obj = physics.integrate(dt, obj);	

		expect(obj.position).toEqual($V([17,0]))
	});

	it('should integrate the position based on the object current position, velocity and acceleration', function() {
		var obj = PhysicsTestsHelper.createPhysicsObject();
		obj.velocity 		= $V([1,0]);
		obj.position 		= $V([1,0]);
		obj.acceleration 	= $V([1,0]);
		var dt  = 16;

		// Sn = Sn-1 + Vn-1 * t + 1/2 a*t^2 = Sn-1
		obj = physics.integrate(dt, obj);	

		expect(obj.position).toEqual($V([145,0]))

	});
});