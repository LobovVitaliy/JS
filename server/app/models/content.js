'use strict';

const db = require('../mongodb');

const Content = {
	get: () => {
		return db.content.find();
	},
	getById: (id) => {
		return db.content.find({ _id: db.ObjectId(id) });
	},
	insert: (data) => {
		return db.content.insert(data);
	},
	update: (id, data) => {
		return db.content.update({ _id: db.ObjectId(id) }, data);
	},
	delete: (id) => {
		return db.content.remove({ _id: db.ObjectId(id) });
	}
};

module.exports = Content;