'use strict';

const router =  require('express').Router();

router.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
	next();
});

router.use('/api/v1', require('./admin'));

module.exports = router;