const base = require("./base");
const Joi = require("@hapi/joi");

function validate(input) {
  const schema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().required(),
    confirm_password: Joi.ref("password"),
    name: Joi.string().required(),
    phone_number: Joi.string()
  })
    .with("password", "confirm_password")
    .xor("email", "phone_number");

  return base(schema, input);
}

module.exports = validate;
