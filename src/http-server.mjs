'use strict';

//import * as bodyParser from 'body-parser';
import * as process from 'process';
import * as http from 'http';
import * as https from 'https';

import {generatePrimordial} from './generators/primordial.mjs';

// @ts-expect-error
import passport from 'passport';
//import * as methodOverride from 'method-override';
// @ts-expect-error
import morgan from 'morgan';
//import * as cors from 'cors';
// @ts-expect-error
import helmet from 'helmet';
// @ts-expect-error
import nocache from 'nocache';
// @ts-expect-error
import express from 'express';
// @ts-expect-error
import session from 'express-session';

//const jsonParser = json({limit: '3m'});
//const urlencodedParser = urlencoded({limit: '3m', extended: false});
const server = express();
const port = process.env.EPOCH_HTTP_PORT || 3000;
const ssl_port = process.env.EPOCH_HTTPS_PORT || 443;
// @todo implement in server.listen
const addr = process.env.EPOCH_HTTP_ADDRESS || '127.0.0.1';

let configured = false;

/**
 * @private
 * @todo document
 */
function routes() {
  server.get('/', (_, res) => {
    res.render('index', {
      header: 'Epoch',
      title: 'Hey',
      message: 'Hello there!',
    });
  });

  server.get('/primordial', (_, res) => {
    res.render('primordial', {
      message: JSON.stringify(generatePrimordial(), null, 2),
    });
  });

  server.get('/tooltip', (_, res) => {
    res.render('tooltip', {
      header: 'Epoch Tooltip Test (future itemdb)',
      title: 'I ❤️ Tooltips',
    });
  });

  server.post(
    '/login',
    passport.authenticate('local', {failureRedirect: '/login'}),
    (_, res) => {
      res.redirect('/');
    },
  );

  //server.post('/login', urlencodedParser, function (req, res) {
  //  res.send('welcome, ' + req.body.username);
  //});

  //server.post('/api', jsonParser, function (req, res) {
  //  // @todo implement
  //});
}

/**
 * @private
 * @todo document
 */
function configure() {
  if (configured === false) {
    server.use(
      session({
        // don't save session if unmodified
        resave: false,
        // don't create session until something stored
        saveUninitialized: false,
        secret: process.env.EPOCH_AUTH_SECRET,
      }),
      nocache(),
      helmet.hidePoweredBy(),
      helmet.frameguard(),
      passport.initialize(),
      passport.session(),
      //methodOverride(),
    );

    if (process.env.NODE_ENV === 'development') {
      server.use(morgan('dev'));
      server.set('view cache', false);
    } else if (process.env.NODE_ENV === 'production') {
      server.locals.cache = 'memory';
      server.use(morgan('combined'));
    }

    server.enable('jsonp callback');

    server.set('view engine', 'pug', 'showStackError', false);

    routes();

    configured = true;
  }
}

function startHttpsServer() {
  configure();

  https.createServer(server).listen(ssl_port, () => {
    console.log(`* https: Listening at https://${addr}:${ssl_port}`);
  });
}

function startHttpServer() {
  configure();

  http.createServer(server).listen(port, () => {
    console.log(`* http: Listening at http://${addr}:${port}`);
  });
}

function startWebServer() {
  if (process.env.EPOCH_HTTP_SERVER) {
    startHttpServer();
  }

  if (process.env.EPOCH_HTTPS_SERVER) {
    startHttpsServer();
  }
}

export {startHttpServer, startHttpsServer, startWebServer};
