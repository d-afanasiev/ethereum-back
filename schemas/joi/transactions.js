const Joi = require("joi");

const getSchema = Joi.object({
  search: Joi.string().required(),
  type: Joi.string().required(),
});

module.exports = {
  getSchema,
};
