const express = require('express');
const router = express.Router();

const {register, login} = require('../controllers/user');
const {userRegistroValidator} = require('../validator/index')

router.post('/registro', userRegistroValidator, register);
router.post('/login', userRegistroValidator, login);

module.exports = router;