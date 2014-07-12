'use strict';

var Physics = function () {
  _.extend(
    this, {
      integrate: function (dt, state) {
        state.position = state.position || $V([0, 0]);
        state.velocity = state.velocity || $V([0, 0]);
        state.acceleration = state.acceleration || $V([0, 0]);
        state.position = state.position.add(
          state.velocity.multiply(dt).add(
            state.acceleration.multiply(
              Math.pow(dt, 2) * 0.5
            )
          )
        );
        return state;
      }
    }
  );
};