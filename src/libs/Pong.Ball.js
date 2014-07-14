'use strict';

var Ball = function (position, color, radius) {
  _.extend(
    this, {
      radius: radius || 10,

      color: color ? color.toLowerCase() : '#ff0000',

      position: position ? $V(position) : $V([0, 0]),

      velocity: $V([0, 0]),

      render: function (context) {
        var rctx = context.context;
        rctx.beginPath();
        rctx.fillStyle = this.color;
        rctx.arc(
          this.position.e(1),
          this.position.e(2),
          this.radius,
          0,
          2 * Math.PI,
          false
        );
        rctx.fill();
        rctx.closePath();
      },

      update: function (dt) {

      }
    }
  );
};