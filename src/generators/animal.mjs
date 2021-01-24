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
];

const peacefulAdjectives = [
  'Cowardly',
  'Innocent',
  'Tame',
  'Frightened',
  'Defenseless',
  'Startled',
];

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
        const names = ['Dog', 'Doggie', 'Hound', 'Canine'];
        // @ts-expect-error
        return adjective + ' ' + names.random();
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

//console.log('Aggressive Name: ' + generateAnimalName('Dog', null, true));
//console.log('Peaceful Name: ' + generateAnimalName('Dog', null, false));

export {generateAnimalName};
