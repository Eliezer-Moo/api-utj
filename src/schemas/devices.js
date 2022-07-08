const Joi = require('@hapi/joi');

const schema = Joi.object({
    nameType: Joi.string().required(),
    room: Joi.string(),
    door: Joi.string(),
    users:Joi.array(),
});

module.exports = schema;