'use strict';

var Player = function (position, components) {
  var _hasTheBall = false,
    _components = [].concat(components || []);

  this.score = 0;
  this.position = position;
  this.acceleration = $V([0, 0]);
  this.velocity = $V([0, 0]);
  this.width = 15;
  this.height = 60;

  this.render = function (rctxt) {
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
  };

  this.update = function (dt) {
    _.each(
      _components,
      function(component) {
        if (component.update) {
          component.update(dt);
        }
      }
    );
  };

  this.hasTheBall = function () {
    return _hasTheBall;
  };

  this.recieveTheBall = function () {
    _hasTheBall = true;
  };

  this.moveLeft = function () {
    this.acceleration = this.acceleration.add($V([0, -0.001]));
  };

  this.moveRight = function () {
    this.acceleration = this.acceleration.add($V([0, 0.001]));
  };
};