const express = require('express');
const router = express.Router();

const {register} = require('../controllers/user');

router.post('/registro', register);

module.exports = router;