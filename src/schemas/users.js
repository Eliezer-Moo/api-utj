const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    status: Joi.boolean(),
});

module.exports = schema;