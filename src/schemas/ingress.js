const Joi = require('@hapi/joi');

const schema = Joi.object({
    device: Joi.string(),
    door: Joi.string(),
});

module.exports = schema;