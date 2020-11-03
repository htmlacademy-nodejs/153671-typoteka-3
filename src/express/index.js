'use strict';
const express = require(`express`);
const router = require(`./routes`);
const path = require(`path`);
const bodyParser = require(`body-parser`);
const PUBLIC_DIR = `public`;

const DEFAULT_PORT = 8080;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);
app.use(router);

app.listen(DEFAULT_PORT);
