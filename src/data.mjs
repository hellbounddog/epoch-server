'use strict';

import * as fs from 'fs';
import * as process from 'process';
const datadir = process.cwd() + '/data/json';

let creatures = null;
let spells = null;

/**
 *
 * @todo sanity checks
 */
function checkCreatures() {
  console.log('* creatures: Running sanity check on database.');
  Object.keys(creatures).forEach((id) => {
    console.log(typeof id);
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
        //
      } else {
        console.log(
          '* spells: WARNING: Spell with id ' +
            id +
            " on field 'description' invalid type or isn't defined! Expected string, got " +
            typeof spells[id]['description'],
        );
      }
    } else {
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
  fs.readFile(datadir + '/creatures.json', (err, data) => {
    console.log('* creatures: Loading database.');
    if (err) throw err;
    creatures = JSON.parse(data);
    console.log('* creatures: Database loaded.');
    checkCreatures();
  });

  fs.readFile(datadir + '/spells.json', (err, data) => {
    console.log('* spells: Loading database.');
    if (err) throw err;
    spells = JSON.parse(data);
    console.log('* spells: Database loaded.');
    checkSpells();
  });
}

export {loadDatabases};
