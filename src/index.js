'use strict';

const fs = require('fs');
const process = require('process'); 
  
console.log("Current working directory: ", process.cwd()); 

const datadir = process.cwd() + '/data/json';

// vector tests
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
 * @todo
 */
function checkCreatures() {
  console.log('* DEBUG: Running sanity check on creatures database.');
  Object.keys(creatures).forEach((id) => {
    console.log(creatures[id]);
  });
}

/**
 *
 * @todo
 */
function checkSpells() {
  console.log('* DEBUG: Running sanity check on spell database.');
  Object.keys(spells).forEach((id) => {
    if ('active' in spells[id]) {
      //console.log(spells[id]);
      console.log('boolean' === typeof spells[id]['active']);
    } else {
      console.log(id);
    }
  });
}

fs.readFile(datadir + '/creatures.json', (err, data) => {
  //console.log('* DEBUG: Loading creatures database.');
  if (err) throw err;
  creatures = JSON.parse(data);
  //console.log(creatures);
  //console.log('* DEBUG: ✅');
  checkCreatures();
});

fs.readFile(datadir + '/spells.json', (err, data) => {
  //console.log('* DEBUG: Loading spell database.');
  if (err) throw err;
  spells = JSON.parse(data);
  //console.log('* DEBUG: ✅');
  checkSpells();
});

fs.readFile('data/player.json', (err, data) => {
  //console.log('* DEBUG: Initializing player from template.');
  if (err) throw err;
  player = JSON.parse(data);
  //console.log(player);
  //console.log('* DEBUG: ✅');
});
