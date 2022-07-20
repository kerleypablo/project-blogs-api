const Joi = require('joi');

const empty = 'Some required fields are missing';
const blogPostSchema = Joi.object({
    title: Joi.string()
    .required()
    .empty()
    .messages({
        'string.empty': empty,
        'any.required': empty,
        'string.min': '"displayName" length must be at least 8 characters long',
    }),
    content: Joi.string()
    .required()
    .empty()
    .messages({
        'string.empty': empty,
        'any.required': empty,
    }),
    categoryIds: Joi.array()
    .required()
    .empty()
    .messages({
        'string.empty': empty,
        'any.required': empty,
    }),
});

module.exports = blogPostSchema;