'use strict';

const mongodb = require('promised-mongo');
const url = 'mongodb://localhost:27017/app';
const db = mongodb(url);

module.exports = db;