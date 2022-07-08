const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
});

module.exports = schema;