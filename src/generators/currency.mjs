'use strict';

import {ArrayRandom} from '../lib/ArrayRandom.mjs';
Array.prototype.random = ArrayRandom;

const start = ['Un', 'El', 'Ta', 'Be'];

const end = ['ve', 'ee', 'li'];

/**
 * Generates the name of the currency used in the player's world
 */
function generateCurrency() {
  return start.random() + end.random();
}

console.log(generateCurrency());
