function response(statusCode, data) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(data)
  };
}

module.exports = response;
