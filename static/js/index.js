'use strict';
const fs = require('fs');
// vector tests
const Vec3 = require('./lib/vector3.js');
const Vec2 = require('./lib/vector2.js');
const Entity = require('./lib/entity2d.js');
let testv2 = new Vec2(0, 1);
console.log(testv2);
let testv3 = new Vec3(0, 1, 5);
console.log(testv3);
fs.readFile('data/creatures.json', (err, data) => {
    //console.log('* DEBUG: Loading creatures database.');
    if (err)
        throw err;
    const creatures = JSON.parse(data);
    //console.log(creatures);
    //console.log('* DEBUG: ✅');
});
fs.readFile('data/spells.json', (err, data) => {
    //console.log('* DEBUG: Loading spell database.');
    if (err)
        throw err;
    const spells = JSON.parse(data);
    //console.log(spells);
    //console.log('* DEBUG: ✅');
    console.log('* DEBUG: Running sanity check on spell database.');
    Object.keys(spells).forEach(key => {
        console.log(key);
        //console.log(spells[key]);
    });
});
fs.readFile('data/player.json', (err, data) => {
    //console.log('* DEBUG: Initializing player from template.');
    if (err)
        throw err;
    const player = JSON.parse(data);
    //console.log(player);
    //console.log('* DEBUG: ✅');
});
//# sourceMappingURL=index.js.map