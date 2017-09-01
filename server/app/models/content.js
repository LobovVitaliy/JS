'use strict';

const mongodb = require('promised-mongo');

const url = 'mongodb://localhost:27017/app';
const db = mongodb(url);

const Content = {
	// find: (req, res, next) => {
	// 	db.content.find().toArray()
	// 		.then(users => res.json(users))
	// 		.catch(err => res.status(500).end(String(err)));
    // }
};

module.exports = Content;