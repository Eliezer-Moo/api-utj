const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    status: Joi.boolean(),
});

module.exports = schema;