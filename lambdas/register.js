"use strict";

const Validator = require("../requests/register");
const Response = require("../common/response");
const {
  deleteUser,
  setUserPassword,
  disableUser,
  getUser,
  createUser,
  userSignup
} = require("../common/user");

const AWS = require("aws-sdk");

module.exports.handler = async event => {
  if (typeof event.body == "string") {
    var requestBody = JSON.parse(event.body);
  } else {
    var requestBody = event.body;
  }

  const validate = Validator(requestBody);

  if (validate.valid) {
    try {
      let result = await userSignup(requestBody);

      return Response(200, {
        message: "Successfully registered",
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
