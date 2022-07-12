const Joi = require('@hapi/joi');

const schema = Joi.object({
    ingres: Joi.string(),
    device: Joi.string(),
    door: Joi.string(),
});

module.exports = schema;