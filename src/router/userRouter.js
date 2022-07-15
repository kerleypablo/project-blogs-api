const express = require('express');
const { dataValidation, verifyEmail } = require('../middleware/userValidate');
const { create, getAllUser } = require('../contreller/UserControler');
const validateJWT = require('../middleware/JWTValidate');

const router = express.Router();

router.post('/', dataValidation, verifyEmail, create);
router.get('/', validateJWT, getAllUser);

module.exports = router;