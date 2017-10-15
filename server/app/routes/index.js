'use strict';

const authenticate = require('../auth/verification');

module.exports = (app) => {
	app.use((req, res, next) => {
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
		res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
		res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
		next();
	});

	app.use('/api/v1', require('../api'));
	app.use('/admin', require('../auth'));
	app.use('*', (req, res) => res.status(404).end());

	app.use((err, req, res, next) => {
		res.status(err.status || 500).json({ error: err.message });
	});
};