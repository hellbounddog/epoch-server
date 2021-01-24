'use strict';

import * as fs from 'fs';
import * as process from 'process';
const datadir = process.cwd() + '/data/json';

let creatures = null;
let spells = null;

function loadCreatures() {
  fs.readFile(datadir + '/creatures.json', (err, data) => {
    console.log('* creatures: Loading database.');
    if (err) throw err;
    creatures = JSON.parse(data);
    console.log('* creatures: Database loaded.');

    checkCreatures();

    // @todo convert id to number, etc
  });
}

/**
 *
 * @todo sanity checks
 */
function checkCreatures() {
  console.log('* creatures: Running sanity check on database.');
  Object.keys(creatures).forEach((id) => {
    if (typeof id === 'string') {
      if (typeof Number(id) === 'number') {
        // @todo further checks?
      } else {
        console.log(
          `* creatures: Invalid type after conversion to number on id ${id}. Expected number, got: `,
          typeof Number(id),
        );
      }
    } else {
      console.log(
        `* creatures: Invalid type for id ${id}. Expected string, got: ` +
          typeof id,
      );
    }
  });
  console.log('* creatures: Sanity check finished.');
}

/**
 *
 * @todo document
 */
function checkSpells() {
  console.log('* spells: Running sanity check on database.');
  Object.keys(spells).forEach((id) => {
    if (typeof spells[id]['name'] === 'string') {
      console.log(spells[id]['name']);
      if (typeof spells[id]['description'] === 'string') {
        // @todo further checks?
      } else {
        console.log(
          `* spells: WARNING: Spell with id ${id} on field 'description' has an invalid type or isn't defined! Expected string, got ` +
            typeof spells[id]['description'],
        );
      }
    } else {
      // @todo why I didn't finish this :'<
      console.log('* spells: WARNING');
    }

    if (typeof spells[id]['active'] === 'boolean') {
      if ('active' in spells[id]) {
        // @todo check if passive spell modifies anything.
      } else {
        // @todo active spell checks.
      }
    } else {
      console.log(
        '* spells: WARNING: Spell with id ' +
          id +
          " on field 'active' has invalid type or isn't defined! Expected boolean, got " +
          typeof spells[id]['active'],
      );
    }
  });
  console.log('* spells: Sanity check finished.');
}

/**
 * Loads and checks the databases.
 */
function loadDatabases() {
  console.log('* data: Loading data from ' + datadir);

  loadCreatures();

  fs.readFile(datadir + '/spells.json', (err, data) => {
    console.log('* spells: Loading database.');
    if (err) throw err;
    spells = JSON.parse(data);
    console.log('* spells: Database loaded.');
    checkSpells();
  });
}

export {loadDatabases};
