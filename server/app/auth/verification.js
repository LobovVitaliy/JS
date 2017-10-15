'use strict';

const passport = require('passport');
const settings = require('../config/settings');

module.exports = (req, res, next) => {
	return passport.authenticate('jwt', {
		session: settings.jwt.session
	})(req, res, next);
};