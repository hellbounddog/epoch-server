'use strict';

const dice = {
  d6: function () {
    return roll(1, 6);
  },
};

/**
 * Returns a random number between min (inclusive) and max (inclusive)
 */
function roll(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
