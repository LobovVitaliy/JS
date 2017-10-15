'use strict';

const mongoose = require('mongoose');
const { properties, schema } = require('./schemas/info');

const SiteSchema = new mongoose.Schema({
	info: {
		address: properties,
		mail: properties,
		phone: properties
	},
	about: {
		info: schema,
		list: [schema]
	},
	works: {
		info: schema,
		cards: [schema]
	},
	contact: schema,
	total: {
		about: schema,
		works: {
			title: properties
		},
		contact: schema,
		updates: schema
	},
	copyright: properties
});

module.exports = mongoose.model('Site', SiteSchema);