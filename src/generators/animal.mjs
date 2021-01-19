'use strict';

require('../lib/array.random.js');
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
      return (
        aggressiveAdjecives.random() +
        ' ' +
        canineAdjectives.random() +
        ' ' +
        name
      );
    } else {
      return aggressiveAdjecives.random() + ' ' + name;
    }
  } else {
    if (type === 'something') {
      return 'TODO';
    } else {
      return peacefulAdjectives.random() + ' ' + name;
    }
  }
}

//console.log('Aggressive Name: ' + generateAnimalName('Dog', null, true));
//console.log('Peaceful Name: ' + generateAnimalName('Dog', null, false));

export {generateAnimalName};
