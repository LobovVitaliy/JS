'use strict';

const express = require('express');
const app = express();
const settings = require('./app/config/settings');

// configure app
require('./app/config')(app);

// connect mongodb
require('./app/mongodb')();

// register routes
require('./app/routes')(app);

// start the server
app.listen(settings.port);
console.log('Server is listening at %s', settings.port);