'use strict';

const router = require('express').Router();

const SiteController = require('./controller');

router.get('/', SiteController.get);
router.put('/', SiteController.update);

module.exports = router;