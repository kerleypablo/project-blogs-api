const express = require('express');
const validateJWT = require('../middleware/JWTValidate');
const { blogPostValidate, checkCategories } = require('../middleware/blogPostValidate');
const { postOnBlogPost } = require('../contreller/blogPostContreller');

const router = express.Router();

router.post('/', validateJWT, blogPostValidate, checkCategories, postOnBlogPost);

module.exports = router;