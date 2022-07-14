const express = require('express');

const loginController = require('../contreller/loginController');
const loginValidate = require('../middleware/loginValidate');

const router = express.Router();

router.post('/', loginValidate, loginController);

module.exports = router;