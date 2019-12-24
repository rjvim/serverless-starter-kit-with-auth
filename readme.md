# AWS Serverless Starter Kit with Authentication

### Highlights

- Built on Serverless Framework
- Uses nodejs
- Has APIs for
  - Registration of users with email/phone_number
  - Login
  - Forgot/Reset/Change password
  - Get Authenticated User
- Accompanying Postman Collection
- Validation for APIs using JOI
- No hardcoding - Configurable using .json file for multiple enviroments
- Readable and Easily editable Code
- Good starting point for Beginners/Medium
- Uses Layers for common libraries

### Setup and Deployment

#### Prerequisites

- Install serverless framework

#### Setup

- Clone the repository
- Install layers - Run: `cd layer/nodejs && npm install && cd../../`

#### Deployment

- Deploy `serverless deploy --stage dev`

#### Learn

* [AWS Basic Setup on Local](https://serverless.betalectic.com/aws-basics-setup/)
