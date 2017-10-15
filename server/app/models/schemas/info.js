'use strict';

const mongoose = require('mongoose');

module.exports = {
	properties: {
		type: String,
		required: true
	},
	get schema() {
		return new mongoose.Schema({
			title: this.properties,
			text: this.properties
		}, { _id: false });
	}
};