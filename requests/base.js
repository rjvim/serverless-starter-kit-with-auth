const _ = require("lodash");

function base(schema, input) {
  const { error, value } = schema.validate(input, { abortEarly: false });

  if (_.isUndefined(error)) {
    return {
      valid: true
    };
  } else {
    var response = {
      message: `Validation failed. ${error.details.length} error(s)`
    };

    response["errors"] = _.map(error.details, d => {
      let field = "";

      if (d.type == "object.with") {
        field = d.context.peer;
      } else {
        field = d.context.key;
      }

      return {
        field: field,
        message: d.type
      };
    });

    return {
      valid: false,
      errors: response
    };
  }
}

module.exports = base;
