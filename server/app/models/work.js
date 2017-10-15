'use strict';

const mongoose = require('mongoose');

const SliderSchema = new mongoose.Schema({
	image: {
		type: Buffer,
		required: true
	}
});

module.exports = mongoose.model('Work', SliderSchema);