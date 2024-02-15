const Joi = require("joi");

module.exports.postValidation = Joi.object({
  title: Joi.string().required(),
  link: Joi.string().required(),
  user: Joi.string().required(),
});