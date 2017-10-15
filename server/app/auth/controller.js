'use strict';

const User = require('../models/user');
const hash = require('./hash');
const jwt = require('jsonwebtoken');
const { secret, options } = require('../config/settings').jwt;
const AppError = require('../libs/errors');

const AuthController = {
	login: (req, res, next) => {
		User.findOne({ username: req.body.username }, (err, user) => {
			if (err) {
				return next(err);
			}
			if (!user) {
				return next(AppError.notFound('Username not found'));
			} else {
				if (hash.sha256(req.body.password) === user.password) {
					let payload = user.toObject();
					delete payload.password;
					const token = 'bearer ' + jwt.sign(payload, secret, options);
					res.json({ token });
				} else {
					return next(AppError.badRequest('Passwords do not match'));
				}
			}
		});
	}
};

module.exports = AuthController;