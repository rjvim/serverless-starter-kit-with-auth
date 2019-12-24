const base = require("./base");
const Joi = require("@hapi/joi");

function validate(input) {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  });

  return base(schema, input);
}

module.exports = validate;
