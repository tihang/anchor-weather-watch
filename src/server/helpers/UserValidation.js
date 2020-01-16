const Joi = require('@hapi/joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });
  const { error } = schema.validate(data);
  return error; // returns null if valid
};

const loginValidataion = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).required()
  });
  const { error } = schema.validate(data);
  return error;
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidataion = loginValidataion;
