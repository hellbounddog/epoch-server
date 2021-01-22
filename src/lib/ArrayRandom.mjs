/*
 * Returns a random element from an array.
 * Usage:
 * import {ArrayRandom} from './lib/ArrayRandom.mjs';
 * Array.prototype.random = ArrayRandom;
 * list.random()
 */
function ArrayRandom() {
  return this[Math.floor(Math.random() * this.length)];
}

export {ArrayRandom};
