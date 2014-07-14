'use strict';

var Court = function (width, height, position) {
  _.extend(
    this, {
      width: width,
      height: height,
      position: position,

      udpate: function (dt) {
      },

      render: function (rctxt) {
        var _court = this;
        renderFloor(rctxt);
        renderNet(rctxt);

        function renderFloor(rctxt) {
          var context = rctxt.context;
          context.beginPath();
          context.fillStyle = '#000000';
          context.strokeStyle = '#FFFFFF';
          context.lineWidth = 5;
          context.rect(
            _court.position.e(1), _court.position.e(2), _court.width, _court.height
          );
          context.fill();
          context.stroke();
          context.closePath();
        }

        function renderNet(rctxt) {
          var context = rctxt.context;
          context.beginPath();
          context.strokeStyle = '#FFFFFF';
          context.lineWidth = 5;
          context.moveTo(_court.position.e(1) + _court.width / 2, _court.position.e(2));
          context.lineTo(_court.position.e(1) + _court.width / 2, _court.position.e(2) + height);
          context.stroke();
          context.closePath();
        }
      }
    }
  );
};