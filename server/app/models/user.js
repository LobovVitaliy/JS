'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	username: { type: String, unique: true },
	password: String,
	role: { type: String, default: 'admin' }
});

module.exports = mongoose.model('User', UserSchema);