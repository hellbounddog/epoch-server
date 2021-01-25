'use strict';

// @ts-expect-error
import {ArrayRandom} from '../lib/ArrayRandom.mjs';
// @ts-expect-error
Array.prototype.random = ArrayRandom;
//const diceRoller = require('rpg-dice-roller');
//const dice = new diceRoller.DiceRoller();

const aggressiveAdjecives = [
  'Rabid',
  'Runaway',
  'Stray',
  'Rambunctious',
  'Wild',
  'Ferocious',
  'Untameable',
  'Unruly',
  'Feral',
  'Defiant',
  'Bloodthirsty',
  'Large',
  'Unwanted',
  'Enormous',
  'Gigantic',
];

const peacefulAdjectives = [
  'Adorable',
  'Cowardly',
  'Innocent',
  'Tame',
  'Frightened',
  'Defenseless',
  'Startled',
];

const dogNames = ['Dog', 'Doggy', 'Doggie', 'Hound', 'Canine'];
const snakeNames = ['Serpent', 'Snake', 'Slither'];
const crowAdjectives = ['Thieving', 'Jealous'];

const canineAdjectives = [
  'Howling',
  'Barking',
  'Disobedient',
  'Wayward',
  'Neglected',
];

function generateAnimalName(name, type, aggressive) {
  if (name === null) {
    return 'Weird Thing';
  }

  if (aggressive) {
    if (type === 'canine') {
      // @ts-expect-error
      const adjective = canineAdjectives.random();
      if (name === 'Dog') {
        // @ts-expect-error
        return adjective + ' ' + dogNames.random();
      } else {
        return adjective + ' ' + name;
      }
    } else {
      // @ts-expect-error
      return aggressiveAdjecives.random() + ' ' + name;
    }
  } else {
    if (type === 'something') {
      // @todo implement
      return 'TODO';
    } else {
      // @ts-expect-error
      return peacefulAdjectives.random() + ' ' + name;
    }
  }
}

console.log('Aggressive Name: ' + generateAnimalName('Dog', 'canine', true));
console.log('Peaceful Name: ' + generateAnimalName('Dog', 'canine', false));

export {generateAnimalName};
