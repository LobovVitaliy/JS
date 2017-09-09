'use strict';

const express    = require('express');
const bodyParser = require('body-parser');
const morgan     = require('morgan');
const app        = express();

// configure app
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

// register our routes
app.use('/', require('./app/routes'));

// start the server
app.listen(PORT);
console.log('Server is listening at %s', PORT);