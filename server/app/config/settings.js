'use strict';

module.exports = {
	port: process.env.PORT || 8080,

	crypto: {
		algorithm: 'sha256',
		salt: process.env.SALT || 'sd#n@45Df',
		digest: 'hex'
	},

	mongo: {
		url: 'mongodb://localhost:27017/app',
		options: {
			useMongoClient: true
		}
	},

	jwt: {
		secret: 'd65kbcv4jkg5123b',
		session: false,
		options: {
			algorithm: 'HS256',
			expiresIn: '12h'
		}
	}
};