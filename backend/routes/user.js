const express = require('express');
const router = express.Router();

const {register, login,logout} = require('../controllers/user');
const {userRegistroValidator} = require('../validator/index')

router.post('/registro', userRegistroValidator, register);
router.post('/login', userRegistroValidator, login);
router.get("/logout", logout);

module.exports = router;