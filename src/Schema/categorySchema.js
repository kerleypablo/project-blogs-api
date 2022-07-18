const Joi = require('joi');

const categorySchema = Joi.object({
    name: Joi.string()
    .required()
    .messages({
        'any.required': '"name" is required',
    }),
});

module.exports = categorySchema;