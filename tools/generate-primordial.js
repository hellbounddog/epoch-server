'use strict';

require('../src/lib/array.random.js');
const diceRoller = require('rpg-dice-roller');
const dice = new diceRoller.DiceRoller();

const prefixes = [
  'Yawning',
  'Malformed',
  'Horrific',
  'Horrible',
  'Chaotic',
  'Bored',
  'Laughing',
  'Abyssal',
  'Deathless',
  'Idiot',
  //'Galactic',
  'Blind',
  //'Nuclear',
  'Primordial',
  'Immortal',
];

const titles = [
  //'Green',
  'Ruler',
  'Guardian',
  'Prince',
  'Child',
  'King',
  'Behemoth',
  'Devourer',
  //'Destroyer',
  'Speaker',
  'Singer',
  'God',
  'Hunter',
  'Lord',
  'Dreamer',
  'Watcher',
];

const numbers = [
  'Infinite',
  'a Thousand',
  'a Million',
  'The Seven',
  'The Six',
  'The One',
];

const adjectives = [
  //'Virgin',
  'Sealed',
  'Sacred',
  'Hidden',
  'Eldritch',
];

const things = [
  'Depths',
  'Horrors',
  'Pathways',
  'Chaos',
  'Below',
  'Worlds',
  //'Apathy',
  'Crows',
  'Dreams',
  'Grief',
  'Emptiness',
  'Eyes',
  'Knowledge',
  'Light',
  'Dark',
  'Forever',
  'The Black Cat',
  'Ways',
  'Thruths',
  'Deadly Omen',
  'Stars',
  'Darkness',
  'Deathly Shadows',
];

function generatePrimordial() {
  const prefix = prefixes.random();
  const title = titles.random();
  const thing = things.random();

  const d6 = dice.roll('d6').total;
  console.log(d6);

  if (d6 === 6) {
    const number = numbers.random();
    return prefix + ' ' + title + ' of ' + number + ' ' + thing;
  } else if (d6 === 1) {
    const adjective = adjectives.random();

  }

  return prefix + ' ' + title + ' of ' + thing;
}

console.log(generatePrimordial());
