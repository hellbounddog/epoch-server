'use strict';

const start = new Date();

import {loadDatabases} from './data.mjs';
import {startWebServer} from './http-server.mjs';
import {pgConnect} from './pg.mjs';

loadDatabases();
pgConnect();
startWebServer();

process.on('exit', (code) => {
  const end = new Date();
  return console.log(
    `* core: Server shutting down. Exit code: ${code} after ` +
      (end.getTime() - start.getTime()),
  );
});
