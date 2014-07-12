describe('Physics', function () {
  it('should integrate objects with no state as not moving', function () {
    var obj = {},
      dt = 16;
    // Sn = Sn-1 + Vn-1 * t + 1/2 a*t^2 = Sn-1
    obj = Physics.integrate(dt, obj);

    expect(obj.position).toEqual($V([0, 0]))
  });

  it('should integrate objects with no acceleration or velocity', function () {
    var obj = createPhysicsObject(),
      dt = 16;
    // Sn = Sn-1 + Vn-1 * t + 1/2 a*t^2 = Sn-1
    obj = Physics.integrate(dt, obj);

    expect(obj.position).toEqual($V([0, 0]))
  });

  it('should integrate objects with acceleration', function () {
    var obj = createPhysicsObject(),
      dt = 16;
    obj.acceleration = $V([1, 0]);

    // Sn = Sn-1 + Vn-1 * t + 1/2 a*t^2 = Sn-1
    obj = Physics.integrate(dt, obj);

    expect(obj.position).toEqual($V([128, 0]))
  });


  it('should integrate objects with velocity', function () {
    var obj = createPhysicsObject(),
      dt = 16;
    obj.velocity = $V([1, 0]);


    // Sn = Sn-1 + Vn-1 * t + 1/2 a*t^2 = Sn-1
    obj = Physics.integrate(dt, obj);

    expect(obj.position).toEqual($V([16, 0]))
  });

  it('should integrate objects with position', function () {
    var obj = createPhysicsObject(),
      dt = 16;
    obj.velocity = $V([1, 0]);
    obj.position = $V([1, 0]);


    // Sn = Sn-1 + Vn-1 * t + 1/2 a*t^2 = Sn-1
    obj = Physics.integrate(dt, obj);

    expect(obj.position).toEqual($V([17, 0]))
  });

  it('should integrate the position based on the object current position, velocity and acceleration', function () {
    var obj = createPhysicsObject(),
      dt = 16;
    obj.velocity = $V([1, 0]);
    obj.position = $V([1, 0]);
    obj.acceleration = $V([1, 0]);

    // Sn = Sn-1 + Vn-1 * t + 1/2 a*t^2 = Sn-1
    obj = Physics.integrate(dt, obj);

    expect(obj.position).toEqual($V([145, 0]))
  });

  function createPhysicsObject() {
    return {
      position: Sylvester.Vector.Zero(2),
      velocity: Sylvester.Vector.Zero(2),
      acceleration: Sylvester.Vector.Zero(2)
    }
  }
});