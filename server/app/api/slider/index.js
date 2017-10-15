'use strict';

const router = require('express').Router();

const SlideController = require('./controller');

router.get('/', SlideController.get);
router.post('/', SlideController.create);
router.put('/', SlideController.update);
router.delete('/', SlideController.delete);

module.exports = router;