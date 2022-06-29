const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
});

module.exports = schema;