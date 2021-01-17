'use strict';

require('../src/lib/array.random.js');
const diceRoller = require('rpg-dice-roller');
const dice = new diceRoller.DiceRoller();

const nameStart = [
  'Mal',
  'So',
  'Na',
  'Xil',
  'El',
  'Une',
  'Moth',
  'Akil',
  //'Xin',
  //'Xi',
  'Ad',
  'Mok',
  'Mokh',
  'Lokh',
  'Ul',
];

const nameEnd = [
  'Abim',
  'Hoth',
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
  'Blooddrenched',
  'Bloodstained',
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
  'Butcher',
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
  'Beast',
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
  'Maddening',
  'Forgotten',
  'Eldritch',
  'Divine',
];

const things = [
  'Planes',
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
  let prefix = 'Missing';
  let title = 'Abomination';

  const d100 = dice.roll('d100').total;
  console.log(d100);
  if (d100 === 100) {
    prefix = 'Suicide';
    title = 'King';
  } else {
    prefix = prefixes.random();
    title = titles.random();
  }

  if (prefix === 'Idiot') {
    if (title === 'Watcher') {
      prefix = 'Blind';
    }
  } else if (prefix === 'Instatiable') {
    if (title === 'Watcher') {
      title = 'Fiend';
    }
  }

  let thing = things.random();

  const d6 = 1;
  //const d6 = dice.roll('d6').total;
  console.log(d6);

  if (d6 === 6) {
    const number = numbers.random();
    return prefix + ' ' + title + ' of ' + number + ' ' + thing;
  } else if (d6 === 1) {
    let adjective = adjectives.random();

    if (adjective === 'Open') {
      if (thing === 'Dreams') {
        adjective = 'Dreamless';
        thing = 'Sleep';
      } else if (thing === 'Grief') {
        adjective = 'Absolute';
      } else if (thing === 'Shadows') {
        adjective = 'Lurking';
      }
    } else if (adjective === 'Eyeless') {
      if (thing === 'Mouths') {
        thing = 'Servants';
      } else if (thing === 'Grief') {
        adjective = 'Endless';
      }
    } else if (adjective === 'Twisting') {
      if (thing === 'Forever') {
        thing = 'Infinity';
      }
    } else if (adjective === 'Eldritch') {
      if (thing === 'Below') {
        adjective = 'Black';
        thing = 'Cat';
      }
    }

    return prefix + ' ' + title + ' of the ' + adjective + ' ' + thing;
  }

  return prefix + ' ' + title + ' of ' + thing;
}

console.log('Name:' + generatePrimordialName());
console.log('Title:' + generatePrimordialTitle());
