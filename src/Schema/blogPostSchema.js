const Joi = require('joi');

const blogPostSchema = Joi.object({
    title: Joi.string()
    .required()
    .empty()
    .messages({
        'empty.validate': 'Some required fields are missing',
        'any.required': 'Some required fields are missing',
        'string.min': '"displayName" length must be at least 8 characters long',
    }),
    content: Joi.string()
    .required()
    .messages({
        'any.required': 'Some required fields are missing',
    }),
    categoryIds: Joi.array()
    .required()
    .messages({
        'any.required': 'Some required fields are missing',
    }),
});

module.exports = blogPostSchema;