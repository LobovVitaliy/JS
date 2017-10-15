'use strict';

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../../models/user');
const settings = require('../settings');

module.exports = (passport) => {
	let options = {};
	options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
	// options.jwtFromRequest = ExtractJwt.fromHeader('authorization');
	options.secretOrKey = settings.jwt.secret;

	passport.use(new JwtStrategy(options, (jwt_payload, done) => {
		User.findOne({ username: jwt_payload.username }, (err, user) => {
			if (err) {
				return done(err, false);
			}
			if (user) {
				done(null, user);
			} else {
				done(null, false);
			}
		});
	}));
};