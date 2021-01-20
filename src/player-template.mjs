'use strict';

import * as fs from 'fs';
import * as process from 'process';

const datadir = process.cwd() + '/data/json';

/**
 * Returns the default player template.
 */
function playerTemplate() {
  fs.readFile(datadir + '/player.json', (err, data) => {
    console.log('* create-player: Initializing player from template.');
    if (err) throw err;
    return JSON.parse(data);
  });
}

export {playerTemplate};
