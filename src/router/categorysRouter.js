const express = require('express');
const validateJWT = require('../middleware/JWTValidate');
const categoryValditate = require('../middleware/categoryValidate');
const { createcreateCategoies, getAll } = require('../contreller/categoryController');

const router = express.Router();

router.post('/', validateJWT, categoryValditate, createcreateCategoies);
router.get('/', validateJWT, getAll);

module.exports = router;