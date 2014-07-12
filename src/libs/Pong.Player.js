'use strict';

var Player = function (position, components) {
  var _hasTheBall = false,
    _components = [].concat(components || []);

  _.extend(
    this, {
      score: 0,
      position: position,
      acceleration: $V([0, 0]),
      velocity: $V([0, 0]),
      width: 15,
      height: 60,

      render: function (rctxt) {
        var context = rctxt.context;
        context.beginPath();
        context.fillStyle = '#FFFFFF';
        context.rect(
          this.position.e(1) - this.width / 2,
          this.position.e(2) - this.height / 2,
          this.width,
          this.height
        );
        context.fill();
        context.closePath();
      },

      update: function (dt) {
        _.each(
          _components,
          function (component) {
            if (component.update) {
              component.update(dt);
            }
          }
        );
      },

      hasTheBall: function () {
        return _hasTheBall;
      },

      recieveTheBall: function () {
        _hasTheBall = true;
      },

      moveLeft: function () {
        this.acceleration = this.acceleration.add($V([0, -0.001]));
      },

      moveRight: function () {
        this.acceleration = this.acceleration.add($V([0, 0.001]));
      }
    }
  );
};