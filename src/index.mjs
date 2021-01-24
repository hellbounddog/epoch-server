'use strict';

const start = new Date();

import {loadDatabases} from './data.mjs';
import {startHttpServer, startHttpsServer} from './http-server.mjs';

// vector tests
// @todo convert vectors to modules
//const Vec3 = require('./lib/vector3.js');
//const Vec2 = require('./lib/vector2.js');

//import * as Entity2D from './entity2d.mjs';

loadDatabases();

if (process.env.EPOCH_HTTP_SERVER) {
  startHttpServer();
}

if (process.env.EPOCH_HTTPS_SERVER) {
  startHttpsServer();
}

process.on('exit', (code) => {
  const end = new Date();
  return console.log(
    `* core: Server shutting down. Exit code: ${code} after ` +
      (end.getTime() - start.getTime()),
  );
});
