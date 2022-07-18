const express = require('express');
const { dataValidation, verifyEmail } = require('../middleware/userValidate');
const { create, getAllUser, getUserById } = require('../contreller/UserControler');
const validateJWT = require('../middleware/JWTValidate');

const router = express.Router();

router.post('/', dataValidation, verifyEmail, create);
router.get('/', validateJWT, getAllUser);
router.get('/:id', validateJWT, getUserById);

module.exports = router;