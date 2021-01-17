'use strict';

require('../src/lib/array.random.js');
const diceRoller = require('rpg-dice-roller');
const dice = new diceRoller.DiceRoller();

const nameStart = [
  'So',
  'Na',
  'Xil',
  'Moth',
  'Akil',
  //'Xin',
  //'Xi',
  'Ad',
  'Mok',
  'Mokh',
];

const nameEnd = [
  'Rhin',
  'Zhul',
  'Ara',
  'Atul',
  'Tra',
  'Thra',
  'Azon',
  'Azoth',
  'Toth',
  'Nur',
  'Ilith',
];

const prefixes = [
  'Yawning',
  'Wild',
  'Malformed',
  //'Horrific',
  'Horrible',
  'Devout',
  'Instatiable',
  'Lonely',
  'False',
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
  'Rotting',
  'Hulking',
];

const titles = [
  //'Green',
  'Ruler',
  'Serpent',
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
  //'a Million',
  'The Seven',
  'The Six',
  'The One',
];

const adjectives = [
  //'Virgin',
  'True',
  'Sealed',
  'Sacred',
  'Twisting',
  'Wicked',
  'Deathly',
  'Eyeless',
  'Open',
  'Gaping',
  'Hidden',
  'Forgotten',
  'Eldritch',
];

const things = [
  'Depths',
  'Mouths',
  'Horrors',
  'Pathways',
  'Chaos',
  'Below',
  'Worlds',
  //'Apathy',
  'Ruins',
  'Dreams',
  'Grief',
  'Emptiness',
  'Eyes',
  'Knowledge',
  'Light',
  'Dark',
  'Forever',
  //'The Black Cat',
  'Ways',
  'Thruths',
  //'Deadly Omens',
  'Stars',
  'Darkness',
  'Shadows',
];

function generatePrimordialName() {
  return nameStart.random() + "'" + nameEnd.random();
}

function generatePrimordialTitle() {
  const prefix = prefixes.random();
  const title = titles.random();
  const thing = things.random();

  const d6 = 1;
  //const d6 = dice.roll('d6').total;
  console.log(d6);

  if (d6 === 6) {
    const number = numbers.random();
    return prefix + ' ' + title + ' of ' + number + ' ' + thing;
  } else if (d6 === 1) {
    let adjective = adjectives.random();

    if (adjective === 'Open') {
      if (thing === 'Grief') {
        adjective = 'Absolute';
      }
      if (thing === 'Shadows') {
        adjective = 'Lurking';
      }
    }

    return prefix + ' ' + title + ' of the ' + adjective + ' ' + thing;
  }

  return prefix + ' ' + title + ' of ' + thing;
}

console.log('Name:' + generatePrimordialName());
console.log('Title:' + generatePrimordialTitle());
