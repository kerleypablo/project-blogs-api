const express = require('express');
const { dataValidation, verifyEmail } = require('../middleware/userValidate');
const userController = require('../contreller/UserControler');

const router = express.Router();

router.post('/', dataValidation, verifyEmail, userController);

module.exports = router;