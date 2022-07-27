const Joi = require('joi');

const fieldsMissing = 'Some required fields are missing';

const nameMessage = '"displayName" length must be at least 8 characters long';
const emailMessage = '"email" must be a valid email';
const passwordMessage = '"password" length must be at least 6 characters long';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': fieldsMissing,
    'string.required': fieldsMissing,
    'string.empty': fieldsMissing,
  }),
  password: Joi.string().required().messages({
    'string.required': fieldsMissing,
    'string.empty': fieldsMissing,
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

const postSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.required': fieldsMissing,
    'string.empty': fieldsMissing,
    'string.title': fieldsMissing,
  }),
  content: Joi.string().required().messages({
    'string.required': fieldsMissing,
    'string.empty': fieldsMissing,
  }),
  categoryIds: Joi.array().items(Joi.number()).required().messages({
    'array.required': fieldsMissing,
    'array.empty': fieldsMissing,
  }),
});

module.exports = {
  loginSchema,
  userSchema,
  postSchema,
};
