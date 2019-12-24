"use strict";

const Response = require("../common/response");
const { getUserWithToken } = require("../common/user");

module.exports.handler = async (event, context) => {
  try {
    // event.requestContext.authorizer.claims
    let result = await getUserWithToken(event.headers.AccessToken);

    return Response(200, {
      result: result,
      event: event,
      context: context
    });
  } catch (error) {
    return Response(400, {
      message: "Something went wrong",
      error: error.message
    });
  }
};
