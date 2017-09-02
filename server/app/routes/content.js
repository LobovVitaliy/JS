'use strict';

const router =  require('express').Router();

const ContentController = require('../controllers/content');

router.get('/', ContentController.get);
router.post('/', ContentController.insert);

module.exports = router;