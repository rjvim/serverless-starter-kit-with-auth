const Joi = require("@hapi/joi");
const base = require("./base");

function validate(input) {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required()
  });

  return base(schema, input);
}

module.exports = validate;
