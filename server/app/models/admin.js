'use strict';

const db = require('../mongodb');

const Model = {
	get: ({ collection }) => {
		return db[collection].find();
	},
	getById: ({ collection, id }) => {
		return db[collection].find({ _id: db.ObjectId(id) });
	},
	insert: (collection, data) => {
		return db[collection].insert(data);
	},
	update: ({ collection, id }, data) => {
		return db[collection].update({ _id: db.ObjectId(id) }, data);
	},
	delete: ({ collection, id }) => {
		return db[collection].remove({ _id: db.ObjectId(id) });
	}
};

module.exports = Model;