'use strict';
const fs = require('fs');
// vector tests
const vec3 = require('./lib/vector3.js');
const vec2 = require('./lib/vector2.js');
let testv2 = new vec2(0, 1);
console.log(testv2);
let testv3 = new vec3(0, 1, 5);
console.log(testv3);
fs.readFile('data/creatures.json', (err, data) => {
    //console.log('* DEBUG: Loading creatures database.');
    if (err)
        throw err;
    const creatures = JSON.parse(data);
    console.log(creatures);
    //console.log('* DEBUG: ✅');
});
fs.readFile('data/spells.json', (err, data) => {
    //console.log('* DEBUG: Loading spell database.');
    if (err)
        throw err;
    const spells = JSON.parse(data);
    //console.log(spells);
    //console.log('* DEBUG: ✅');
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