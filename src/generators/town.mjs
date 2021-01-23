'use strict';

import {ArrayRandom} from '../lib/ArrayRandom.mjs';
Array.prototype.random = ArrayRandom;

const start = ['Bad', 'Her', 'Here', 'Esp', 'Gort', 'Lip', 'Tink'];
const end = ['sfeld', 'esfield', 'on', 'ville', 'enau', 'hook'];

/**
 * Generates the name of the town used in the player's world
 */
function generateName() {
  return start.random() + end.random();
}

function generateTown() {
  const town = {
    name: generateName(),
  };

  return town;
}

export {generateTown};
