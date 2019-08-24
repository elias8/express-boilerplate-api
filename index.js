'use strict';

// eslint-disable-next-line no-global-assign
Promise = require('bluebird');
const app = require('./src/config/express');
const Log = require('./src/config/logger');
const {env, port} = require('./src/config/variables');
const mongoose = require('./src/config/mongoose');

new Log(app);
const log = Log;

mongoose.connect();

app.listen(port, () => log.i(`API Running in ${env} on port ${port}`));

module.exports = app;