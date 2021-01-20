'use strict';

import * as process from 'process';

if (process.env.EPOCH_HTTP_SERVER) {
  // express modules and settings
  const express = require('express');
  const hash = require('pbkdf2-password')();
  const session = require('express-session');
  const app = express();
  const port = process.env.EPOCH_HTTP_PORT || 3000;
  // @todo implement in app.listen
  const addr = process.env.EPOCH_HTTP_ADDRESS || '127.0.0.1';

  app.use(express.urlencoded({extended: false}));

  app.use(
    session({
      resave: false, // don't save session if unmodified
      saveUninitialized: false, // don't create session until something stored
      secret: process.env.EPOCH_AUTH_SECRET,
    }),
  );
  app.disable('x-powered-by');
  app.set('view engine', 'pug');
  app.use(express.static('public'));

  app.get('/', (req, res) => {
    res.render('index', {title: 'Hey', message: 'Hello there!'});
  });

  app.listen(port, () => {
    console.log(`* http: Listening at http://${addr}:${port}`);
  });
}
