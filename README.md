# Backend API REST for Insurance Company (Assessment)

## Statement

As an insurance company we've been asked to develop an application that manages some information about our insurance policies and company clients. To do that, we have two services that provide all the data we need:
- The list of company clients can be found at:
http://www.mocky.io/v2/5808862710000087232b75ac
- The list of company policies can be found at:
http://www.mocky.io/v2/580891a4100000e8242b75c5

With that information, we need to create a Web API that exposes the following services with some added constraints:

- Get user data filtered by user id -> Can be accessed by users with role "users" and "admin"
- Get user data filtered by user name -> Can be accessed by users with role "users" and "admin"
- Get the list of policies linked to a user name -> Can be accessed by users with role "admin"
- Get the user linked to a policy number -> Can be accessed by users with role "admin"We have the following constraints:
- REST API should be developed using some node framework (loopback or express)
- Think about licenses of 3d party libraries (if needed)
- Authentication and authorization. Take the user role from the web service that returns the list of company clients 

As our stakeholders are very fussy, here you have some tips:
- Usage of last technologies (not less than node 6)
- Solution properly structured
- Usage of patterns
- Add everything you thing it's needed to ensure product's quality
- Documentation

## Preparation details

### Class Diagram
![Class Diagram](https://github.com/zergote/backend-developer-assessment/blob/master/Documents/Diagrams/Architecture%20Class%20Diagram.png "Class Diagram")

## Solution Details 
- The responsibilities have been broken down into layers.
- [Domain-driven design (DDD)](https://en.wikipedia.org/wiki/Domain-driven_design) and the construction patterns of the [Onion Architecture](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/) have been used.
- The injection of dependencies and inversion of control has been applied to decouple components. The [Awilix](https://github.com/jeffijoe/awilix) library has been used for this purpose.
- The system is easy to modify, update and scale thanks to its structure. It has the structure for a business application.
- Code is well documented and fully commented.
- For the authentication the user name has been used, the password has been left blank since they are not provided.
- For authorization JSON WEB TOKENS is used instead of cookies.
- The api uses parameters instead of queries (can be modified to suit the desired solution).
- Minimum number of dependencies used.

## How to Use
```bash
# Clone this repository
$ git clone https://github.com/zergote/DIPCHARTS-Front-end-Web-APP

# Go into the repository
$ cd backend-developer-assessment

# Install dependencies
$ npm install

# Run the app
$ npm start

# The api is running at http://127.0.0.1:3000/api/
# Use Postman a client REST to test the API. To access the searches 
# related to the policies you must first request to login to receive 
# the token that authorizes you to perform the queries. The token 
# must be sent in the header.

# Run test
$ npm test

# The integration tests of the API Rest have been added.
# Unit tests policy only have been added.
```

## API Documentation 
- **POST: /api/clients/signin - Sign User**  

The variable body (req.body) is sent in json format with the necessary data for customer identification, for example:
```json
  {
  	"username":"Britney",
  	"password": ""
  }
```
The database does not provide a password, so it is left empty. If the data is correct, you must receive the confirmation of identification and the token to authorize the queries:

```json
  {
      "process": true,
      "message": "Britney has been correctly identified",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsIm5hbWUiOiJCcml0bmV5IiwiZW1haWwiOiJicml0bmV5YmxhbmtlbnNoaXBAcXVvdGV6YXJ0LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTUzMDcwMDIyNiwiZXhwIjoxNTMwNzAzODI2fQ.2tOK460eDVW5jC1ELaRduq-b3FbBDwsWFce2e0sfrV0"
  }
```


The token has a time of 1 hour. A new token must be created when it expires. To perform the following queries you need to use the received token and send it to the header using the variable authorization by prefixing it with the word JWT and leaving a space for the token to be placed:

  ```json
  headers: {
              "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEwZWNlNWRiLWNkMTQtNGYyMS04MTJmLTk2NjYzM2U3YmU4NiIsIm5hbWUiOiJCcml0bmV5IiwiZW1haWwiOiJicml0bmV5YmxhbmtlbnNoaXBAcXVvdGV6YXJ0LmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTUzMDcwMDIyNiwiZXhwIjoxNTMwNzAzODI2fQ.2tOK460eDVW5jC1ELaRduq-b3FbBDwsWFce2e0sfrV0"
        },
  ```

- **GET: /api/clients/id/:userId - Get user**

Through this resource you can obtain the data related to a customer's identifier . For example:

  ```json
  http://127.0.0.1:3000/api/clients/id/31cdee85-d0d1-43c1-9d87-9390dc4c445d 
  [
      {
          "id": "31cdee85-d0d1-43c1-9d87-9390dc4c445d",
          "name": "Morris",
          "email": "morrisblankenship@quotezart.com",
          "role": "admin"
      }
  ]
  ```

  

- **GET: /api/clients/username/:userName - Get user**

Through this resource you can obtain the data related to a customer's name. For example:

  ```json
  Request:
  http://127.0.0.1:3000/api/clients/username/Lamb
  
  Output:
  [
      {
          "id": "a74c83c5-e271-4ecf-a429-d47af952cfd4",
          "name": "Lamb",
          "email": "lambblankenship@quotezart.com",
          "role": "user"
      }
  ]
  ```

- **GET: /api/clients/policy/:policyID - Get user**

Through this resource you can obtain the Client's policy number. For example:

  ```json
  Request:
  http://127.0.0.1:3000/api/clients/policy/dde33fe3-b04c-4d4b-994f-c823e4908be5
  
  Output:
  [
      {
          "id": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb",
          "name": "Manning",
          "email": "manningblankenship@quotezart.com",
          "role": "admin"
      }
  ]
  ```

- **GET: /api/policies/client/:userName - Get policies**

Through this resource you can obtain the policies related to a customer name. For example:

  ```json
  Request:
  http://127.0.0.1:3000/api/policies/client/Manning
  
  Output:
  [
      {
          "id": "64cceef9-3a01-49ae-a23b-3761b604800b",
          "amountInsured": 1825.89,
          "email": "inesblankenship@quotezart.com",
          "inceptionDate": "2016-06-01T03:33:32Z",
          "installmentPayment": true,
          "clientId": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
      },
      {
          "id": "56b415d6-53ee-4481-994f-4bffa47b5239",
          "amountInsured": 2301.98,
          "email": "inesblankenship@quotezart.com",
          "inceptionDate": "2014-12-01T05:53:13Z",
          "installmentPayment": false,
          "clientId": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
      },
      .
      .
      .
      {
          "id": "facd2c78-65f0-4a49-8a66-560109d263bc",
          "amountInsured": 795.83,
          "email": "inesblankenship@quotezart.com",
          "inceptionDate": "2014-10-18T07:12:05Z",
          "installmentPayment": true,
          "clientId": "e8fd159b-57c4-4d36-9bd7-a59ca13057bb"
      }
  ]
  ```

## Example using postman:

### Request - Signin
![Postman - Signin](https://github.com/zergote/backend-developer-assessment/blob/master/Documents/Postmant%20Tutorial/1-Signin_Client.png "Example request of Signing with Postman")

### Output - Signin  Request
![Postman - Signin Request](https://github.com/zergote/backend-developer-assessment/blob/master/Documents/Postmant%20Tutorial/1-Signin_Client_Result.png "Example output of Signing with Postman")

------

### Request/Output - Get Policy By Client Name - Without Authorization
![Postman - Get Policy By Client Name - Without Authorization](https://github.com/zergote/backend-developer-assessment/blob/master/Documents/Postmant%20Tutorial/2-Get_Policy_By_Client_Fail.png "Example Get Policy By Client Name - Without Authorization")

### Request - Get Policy By Client Name - With Authorization
![Postman - Get Policy By Client Name - With Authorization](https://github.com/zergote/backend-developer-assessment/blob/master/Documents/Postmant%20Tutorial/2-Get_Policy_By_Client.png"Example Request - Get Policy By Client Name - With Authorization")

### Output - Get Policy By Client Name - With Authorization Request
![Postman - Get Policy By Client Name - With Authorization](https://github.com/zergote/backend-developer-assessment/blob/master/Documents/Postmant%20Tutorial/2-Get_Policy_By_Client_Result.png "Example  Output - Get Policy By Client Name - With Authorization")


## License

Copyright (c) 2018 Christian Yánez García

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
