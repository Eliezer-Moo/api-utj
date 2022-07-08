const Joi = require('@hapi/joi');

const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    capacity: Joi.number().required(),
    status: Joi.boolean(),
    doors: Joi.array(),
    users: Joi.array(),
    devices: Joi.array(),
});

module.exports = schema;