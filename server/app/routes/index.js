'use strict';

const router =  require('express').Router();
// const Content = require('../models/content');

router.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });
});

// router.use('', require(''));

module.exports = router;