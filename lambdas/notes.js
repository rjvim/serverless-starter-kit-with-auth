"use strict";

const Response = require("../common/response");
const { getUserWithToken } = require("../common/user");

module.exports.handler = async (event, context) => {
  try {
    // let result = await getUserWithToken(event.headers.AccessToken);

    return Response(200, {
      result: ["Note 1", "Note 2", "Note 3", "Note 4"]
    });
  } catch (error) {
    return Response(400, {
      message: "Something went wrong",
      error: error.message
    });
  }
};
