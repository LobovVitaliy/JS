'use strict';

const router =  require('express').Router();

router.use('/content', require('./content'));

module.exports = router;