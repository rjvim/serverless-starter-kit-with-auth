const Joi = require("@hapi/joi");
const base = require("./base");

function validate(input) {
  const schema = Joi.object({
    token: Joi.string()
  });

  return base(schema, input);
}

module.exports = validate;
