const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string().required(),
    doors: Joi.number().required(),
    capacity: Joi.number().required(),
    status: Joi.boolean(),
    users: Joi.string(),
    devices: Joi.string(),
});

module.exports = schema;