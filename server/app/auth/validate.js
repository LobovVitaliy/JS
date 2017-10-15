'use strict';

const Joi = require('joi');
const AppError = require('../libs/errors');

const MIN_EMAIL_LENGTH = 1;
const MAX_EMAIL_LENGTH = 100;
const MIN_PASSWORD_LENGTH = 4;
const MAX_PASSWORD_LENGTH = 16;

const keys = {
	username: Joi.string().trim().min(MIN_EMAIL_LENGTH).max(MAX_EMAIL_LENGTH).required(),
	password: Joi.string().min(MIN_PASSWORD_LENGTH).max(MAX_PASSWORD_LENGTH).required()
};

const AuthValidate = {
	login: (req, res, next) => {
		const schema = Joi.object().keys({
			username: keys.username,
			password: keys.password
		});
		Joi.validate(req.body, schema, (err, value) => {
			if (err) {
				return next(AppError.badRequest(err.message));
			}
			next();
		});
	}
};

module.exports = AuthValidate;