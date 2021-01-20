'use strict';

const fs = require('fs');
const process = require('process');
const datadir = process.cwd() + '/data/json';
require('./http-server.js');

// vector tests
// @todo convert vectors to modules
const Vec3 = require('./lib/vector3.js');
const Vec2 = require('./lib/vector2.js');
//const Entity = require('./lib/entity2d.js');

let creatures = {};
let spells = {};
let player = {};

const testv2 = new Vec2(0, 1);
console.log(testv2);
const testv3 = new Vec3(0, 1, 5);
console.log(testv3);

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
      // @todo empty
    } else {
      // @todo warning
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
          " has invalid type or isn't defined! Expected boolean, got " +
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
  console.log('* core: Loading data from ' + datadir);
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

  fs.readFile(datadir + '/player.json', (err, data) => {
    //console.log('* DEBUG: Initializing player from template.');
    if (err) throw err;
    player = JSON.parse(data);
    //console.log(player);
    //console.log('* DEBUG: ✅');
  });
}

loadDatabases();
