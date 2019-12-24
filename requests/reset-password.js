const base = require("./base");
const Joi = require("@hapi/joi");

function validate(input) {
  const schema = Joi.object({
    username: Joi.string(),
    password: Joi.string().required(),
    confirm_password: Joi.ref("password"),
    code: Joi.string().required()
  }).with("password", "confirm_password");

  return base(schema, input);
}

module.exports = validate;
