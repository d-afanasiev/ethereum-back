const Joi = require("joi");

const getSerchSchema = Joi.object({
  search: Joi.string().required(),
  type: Joi.string().required(),
  page: Joi.string().required(),
  limit: Joi.string(),
});

const getSchema = Joi.object({
  page: Joi.string().required(),
  limit: Joi.string(),
});

module.exports = {
  getSerchSchema,
  getSchema,
};
