'use strict';

const mongoose = require('mongoose');
const info = require('./schemas/info');

const SliderSchema = new mongoose.Schema({
	image: {
		type: Buffer,
		required: true
	},
	info: info.schema
});

module.exports = mongoose.model('Slide', SliderSchema);