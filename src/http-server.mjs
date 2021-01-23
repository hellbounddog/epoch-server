'use strict';

import * as process from 'process';
import * as http from 'http';
import * as https from 'https';
import * as compress from 'compression';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import express from 'express';
import session from 'express-session';

const app = express();
const port = process.env.EPOCH_HTTP_PORT || 3000;
const ssl_port = process.env.EPOCH_HTTPS_PORT || 443;
// @todo implement in app.listen
const addr = process.env.EPOCH_HTTP_ADDRESS || '127.0.0.1';

let configured = false;

/**
 * @private
 * @todo document
 */
function routes() {
  app.get('/', (req, res) => {
    res.render('index', {
      header: 'Epoch',
      title: 'Hey',
      message: 'Hello there!',
    });
  });
}

/**
 * @private
 * @todo document
 */
function configure() {
  if (configured === false) {
    app.use(
      session({
        // don't save session if unmodified
        resave: false,
        // don't create session until something stored
        saveUninitialized: false,
        secret: process.env.EPOCH_AUTH_SECRET,
      }),
      express.static('public'),
      helmet.noCache(),
      helmet.hidePoweredBy(),
      helmet.frameguard(),
      bodyParser.json({limit: '3mb'}),
      bodyParser.urlencoded({limit: '3mb', extended: true}),
      methodOverride(),
    );

    app.enable('jsonp callback');
    app.set('view engine', 'pug');

    routes();

    configured = true;
  }
}

function startHttpsServer() {
  configure();

  https.createServer(app).listen(ssl_port, () => {
    console.log(`* https: Listening at https://${addr}:${ssl_port}`);
  });
}

function startHttpServer() {
  configure();

  http.createServer(app).listen(port, () => {
    console.log(`* http: Listening at http://${addr}:${port}`);
  });
}

export {startHttpServer, startHttpsServer};
