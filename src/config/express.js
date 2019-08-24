'use strict';

const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const compress = require('compression');
const bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token');

const routes = require('../route');
const {baseUrl} = require('./variables');

const app = express();

app.use(cors());
app.use(helmet());
app.use(compress());
app.use(bearerToken());
app.use(baseUrl, routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;