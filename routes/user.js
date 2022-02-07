const express = require('express');
const router = express.Router();

const {register} = require('../controllers/user');
const {userRegistroValidator} = require('../validator/index')

router.post('/registro', userRegistroValidator, register);

module.exports = router;