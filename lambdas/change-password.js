"use strict";

const Validator = require("../requests/change-password");
const Response = require("../common/response");
const { changePassword } = require("../common/user");

module.exports.handler = async event => {
  const requestBody = JSON.parse(event.body);
  const validate = Validator(requestBody);

  if (validate.valid) {
    try {
      let result = await changePassword(requestBody);

      return Response(200, {
        message: "Successfully confirmed",
        result: result
      });
    } catch (error) {
      return Response(400, {
        message: "Something went wrong",
        error: error.message
      });
    }
  } else {
    return Response(400, validate.errors);
  }
};
