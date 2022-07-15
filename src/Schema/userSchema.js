const Joi = require('joi');

const userSchema = Joi.object({
    displayName: Joi.string()
    .required()
    .min(8)
    .messages({
        'any.required': 'O campo "displayName" é obrigatório',
        'string.min': '"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string()
    .required()
    .email()
    .messages({
        'any.required': 'O campo "email" é obrigatório',
        'string.email': '"email" must be a valid email',
    }),
    password: Joi.string()
    .required()
    .min(6)
    .messages({
        'any.required': 'O campo "password" é obrigatório',
        'string.min': '"password" length must be at least 6 characters long',
    }),
});

module.exports = userSchema;