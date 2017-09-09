'use strict';

const router =  require('express').Router();

const Controller = require('../controllers/admin');

router.get('/:collection', Controller.get);
router.get('/:collection/:id', Controller.getById);
router.post('/:collection', Controller.insert);
router.put('/:collection/:id', Controller.update);
router.delete('/:collection/:id', Controller.delete);

module.exports = router;