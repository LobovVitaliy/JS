'use strict';

const router = require('express').Router();

router.use('/site', require('./site'));
// router.use('/slider', require('./slider'));
// router.use('/works', require('./works'));

module.exports = router;