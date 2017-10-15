'use strict';

const router = require('express').Router();

const WorkController = require('./controller');

router.get('/', WorkController.get);
router.post('/', WorkController.create);
router.delete('/', WorkController.delete);

module.exports = router;