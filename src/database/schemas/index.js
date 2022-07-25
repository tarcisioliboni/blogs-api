const Joi = require('joi');

const failLoginMessage = 'Some required fields are missing';

const nameMessage = '"displayName" length must be at least 8 characters long';
const emailMessage = '"email" must be a valid email';
const passwordMessage = '"password" length must be at least 6 characters long';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': failLoginMessage,
    'string.required': failLoginMessage,
    'string.empty': failLoginMessage,
  }),
  password: Joi.string().required().messages({
    'string.required': failLoginMessage,
    'string.empty': failLoginMessage,
  }),
});

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': nameMessage,
    'string.required': nameMessage,
    'string.empty': nameMessage,
  }),
  email: Joi.string().email().required().messages({
    'string.email': emailMessage,
    'string.required': emailMessage,
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': passwordMessage,
    'string.required': passwordMessage,
    'string.empty': passwordMessage,
  }),
});

module.exports = {
  loginSchema,
  userSchema,
};
