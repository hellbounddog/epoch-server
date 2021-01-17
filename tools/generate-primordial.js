'use strict';

require('../src/lib/array.random.js');
require('../src/lib/dice.js');

const prefixes = [
  'Abyssal',
  'Blind',
  'Nuclear',
  'Primordial',
  'Immortal',
];

const titles = [
  'Hunter of',
  'Lord of',
  'Dreamer of',
];

const numbers = [
  'a Thousand',
  'a Million',
  'The Seven',
  'The Six',
];

const things = [
  'Eyes',
  'Black Cat',
  'Deadly Omen',
  'Deathly Shadows',
];

function generatePrimordial() {
  const prefix = prefixes.random();
  const title = titles.random();

  if (d6 === 3 || d6 === 6) {
    //
  }

  return prefix + ' ' + title;
}

console.log(dice);
console.log(generatePrimordial());
