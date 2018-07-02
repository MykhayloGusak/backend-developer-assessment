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
![Class Diagram](https://github.com/zergote/backend-developer-assessment/blob/master/Documents/Architecture%20Class%20Diagram.png "Class Diagram")

## Solution Details 
- The responsibilities have been broken down into layers.
- DDD and the construction patterns of the onion architecture have been used.
- The dependency inversion has been applied to decouple components.
- The system is easy to modify, update and scale thanks to its structure. It has the structure for a business application.
- Code is well documented and fully commented.
- For the authentication the user name has been used, the password has been left blank since they are not provided.
- For authorization JSON WEB TOKENS is used instead of cookies.
- The api uses parameters instead of queries (can be modified to suit the desired solution)

## API Documentation (in progress)
- /** POST /api/clients/signin - Sign User */
- /** GET /api/clients/id/:userId - Get user */
- /** GET /api/clients/user/:userName - Get user */
- /** GET /api/clients/policy/:policyID - Get user */
- /** GET /api/policies/client/:userName - Get policies */ 
     
## How to Use
```
# Clone this repository
$ git clone https://github.com/zergote/DIPCHARTS-Front-end-Web-APP

# Go into the repository
$ cd backend-developer-assessment

# Install dependencies
$ npm install

# Run the app
$ npm start
```
## License
Copyright (c) 2018 Christian Yánez García

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
