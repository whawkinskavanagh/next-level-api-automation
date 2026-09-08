## I've created this repo for me to practice and continue to learn about API testing

### Set up

The tests are set up using a Mocha framework and they are using Javascript for the test files and Pactum for API testing.

### Project details

The API documentation is taken from [text](https://restful-booker.herokuapp.com/)
This is an API playground for anyone wanting to learn more about API testing.

This is a link to the API swagger documentation [text](https://restful-booker.herokuapp.com/apidoc/index.html)

### to run the tests 
```npm install```   
```npm test```

### What the tests do

There is a helper file that I have created to help maintain the code for repetitive tests.  Such as the initial booking request.

I have created the following tests
- A test to create a booking and verify it has been booked.
- An invalid test that has no last name.  This should return a 400 response and return Bad Request error message.
- An invalid token test that has missing characters from the token.  This will return a 400 response and a Forbidden error message.


