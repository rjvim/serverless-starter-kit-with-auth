const base = require("./base");
const Joi = require("@hapi/joi");

function validate(input) {
  const schema = Joi.object({
    access_token: Joi.string().required(),
    old_password: Joi.string().required(),
    password: Joi.string().required(),
    confirm_password: Joi.ref("password")
  }).with("password", "confirm_password");

  return base(schema, input);
}

module.exports = validate;
