const Joi = require('joi');

const message = 'Some required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': message,
    'string.required': message,
    'string.empty': message,
  }),
  password: Joi.string().required().messages({
    'string.required': message,
    'string.empty': message,
  }),
});

module.exports = loginSchema;
