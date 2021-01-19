'use strict';

require('../lib/array.random.js');
const diceRoller = require('rpg-dice-roller');
const dice = new diceRoller.DiceRoller();

/**
 * Affects certain cosmic events during world generation.
 * chaotic:
 *   DEAD:
 *   He liked to toy with feeble mortals. Several creatures evolution
 *   was influenced by it. Those who covet it and it's minions start
 *   resembling it.
 *   An unfathomable evil was lurking once in the far corners
 *   of the universe.
 *   His blood provides great benefits but quickly corrupts and
 *   kills the player.
 *   ALIVE:
 *   @todo write
 * neutral:
 *   This God never cared for any mortal worlds,
 *   every race evolved naturally and left ro do whatever they pleased.
 *   If dead only very few rumors about the existence of a cult
 *   following it remains in the world.
 *   When alive, a few followers can be found around the world.
 *   They affect nothing, his blood has no effects on the player.
 * good:
 *   The world's history is pretty boring.
 *   not a lot of calamities or wars have happened, until recently
 *   when, the God was killed, imprisoned or went insane.
 *   His blood grants the imbiber a very short stat boosting buff.
 * @todo Actually implement this in storyteller!
 */
const alignments = ['chaotic', 'neutral', 'good'];

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
  'Despair',
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

  const d6 = dice.roll('d6').total;
  //console.log(d6);

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
      } else if (thing === 'Ruins') {
        adjective = 'Buried';
      }
    } else if (adjective === 'Forgotten') {
      if (thing === 'Forever') {
        thing = 'Path';
      }
    } else if (adjective === 'Sacred') {
      if (thing === 'Mouths') {
        adjective = 'Chanting';
      }
    } else if (adjective === 'Deathly') {
      if (thing === 'Forever') {
        thing = 'Spirits';
      } else if (thing === 'Worlds') {
        adjective = 'Burning';
      }
    } else if (adjective === 'Gaping') {
      if (thing === 'Grief') {
        adjective = 'Disorder and';
      } else if (thing === 'Knowledge') {
        adjective = 'Missing';
      } else if (thing === 'Worlds') {
        adjective = 'Shattered';
      } else if (thing === 'Forever') {
        adjective = 'Eternal';
        thing = 'Suffering';
      }
    } else if (adjective === 'Eyeless') {
      if (thing === 'Mouths') {
        thing = 'Servants';
      } else if (thing === 'Ruins') {
        adjective = 'Forgotten';
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

function generatePrimordialAlignment() {
  return alignments.random();
}

function generatePrimordialAlive() {
  if (Math.random() < 0.5) {
    return true;
  } else {
    return false;
  }
}

console.log('Alive: ' + generatePrimordialAlive());
console.log('Alignment: ' + generatePrimordialAlignment());
console.log('Name:' + generatePrimordialName());
console.log('Title:' + generatePrimordialTitle());
