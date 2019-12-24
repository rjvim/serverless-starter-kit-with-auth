const AWS = require("aws-sdk");

function refreshToken(requestBody) {
  var params = {
    AuthFlow: "REFRESH_TOKEN_AUTH",
    ClientId: process.env.USER_POOL_CLIENT_ID,
    AuthParameters: {
      REFRESH_TOKEN: requestBody.token
    }
  };

  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

  return cognitoidentityserviceprovider
    .initiateAuth(params)
    .promise()
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

function forgotPassword(requestBody) {
  var params = {
    ClientId: process.env.USER_POOL_CLIENT_ID,
    Username: requestBody.username
  };

  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

  return cognitoidentityserviceprovider
    .forgotPassword(params)
    .promise()
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

function confirmForgotPassword(requestBody) {
  var params = {
    ClientId: process.env.USER_POOL_CLIENT_ID,
    Username: requestBody.username,
    ConfirmationCode: requestBody.code,
    Password: requestBody.password
  };

  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

  return cognitoidentityserviceprovider
    .confirmForgotPassword(params)
    .promise()
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

function changePassword(requestBody) {
  var params = {
    AccessToken: requestBody.access_token,
    PreviousPassword: requestBody.old_password,
    ProposedPassword: requestBody.password
  };

  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

  return cognitoidentityserviceprovider
    .changePassword(params)
    .promise()
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

function getUserWithToken(token) {
  var params = {
    AccessToken: token
  };

  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

  return cognitoidentityserviceprovider
    .getUser(params)
    .promise()
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

function userSignup(requestBody) {
  var params = {
    ClientId: process.env.USER_POOL_CLIENT_ID,
    Password: requestBody.password,
    Username: requestBody.email,
    UserAttributes: [
      {
        Name: "name",
        Value: requestBody.name
      },
      {
        Name: "email",
        Value: requestBody.email
      }
    ]
  };

  if (requestBody.phone_number) {
    params.UserAttributes.push({
      Name: "phone_number",
      Value: requestBody.phone_number
    });
  }

  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

  return cognitoidentityserviceprovider
    .signUp(params)
    .promise()
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

function confirmSignup(requestBody) {
  var params = {
    ClientId: process.env.USER_POOL_CLIENT_ID,
    ConfirmationCode: requestBody.code,
    Username: requestBody.email
  };

  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

  return cognitoidentityserviceprovider
    .confirmSignUp(params)
    .promise()
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

function resendCode(requestBody) {
  var params = {
    ClientId: process.env.USER_POOL_CLIENT_ID,
    Username: requestBody.email
  };

  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

  return cognitoidentityserviceprovider
    .resendConfirmationCode(params)
    .promise()
    .then(response => {
      return response;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

function loginUser(requestBody) {
  var params = {
    ClientId: process.env.USER_POOL_CLIENT_ID,
    AuthFlow: "USER_PASSWORD_AUTH",
    AuthParameters: {
      USERNAME: requestBody.email,
      PASSWORD: requestBody.password
    }
  };

  var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

  return cognitoidentityserviceprovider
    .initiateAuth(params)
    .promise()
    .then(response => {
      return response.AuthenticationResult;
    })
    .catch(error => {
      throw new Error(error.message);
    });
}

module.exports = {
  userSignup,
  confirmSignup,
  resendCode,
  loginUser,
  getUserWithToken,
  refreshToken,
  forgotPassword,
  confirmForgotPassword,
  changePassword
};
