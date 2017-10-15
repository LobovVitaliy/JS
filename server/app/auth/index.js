'use strict';

const router = require('express').Router();

const AuthValidate = require('./validate');
const AuthController = require('./controller');

router.post('/login', AuthValidate.login, AuthController.login);

module.exports = router;