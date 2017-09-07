'use strict';

const router =  require('express').Router();

const ContentController = require('../controllers/content');

router.get('/', ContentController.get);
router.get('/:id', ContentController.getById);
router.post('/', ContentController.insert);
router.put('/:id', ContentController.update);
router.delete('/:id', ContentController.delete);

module.exports = router;