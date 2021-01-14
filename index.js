'use strict';

const fs = require('fs');

fs.readFile('data/creatures.json', (err, data) => {
  console.log('* DEBUG: Loading creatures database.');
  if (err) throw err;
  const creatures = JSON.parse(data);
  console.log(creatures);
  console.log('* DEBUG: ✅');
});

fs.readFile('data/spells.json', (err, data) => {
  console.log('* DEBUG: Loading spell database.');
  if (err) throw err;
  const spells = JSON.parse(data);
  console.log(spells);
  console.log('* DEBUG: ✅');
});

fs.readFile('data/player.json', (err, data) => {
  console.log('* DEBUG: Initializing player from template.');
  if (err) throw err;
  const player = JSON.parse(data);
  console.log(player);
  console.log('* DEBUG: ✅');
});

