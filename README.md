# Angular Shortly
A full-stack URL-shortener app written in Angular, Node, Express and Mongo.

This was the final sprint in the three-sprint Shortly series :) I completed it alongside a pair when I was a student at [Hack Reactor Remote](http://www.hackreactor.com/remote-beta/).

Topics covered in this sprint:
- Controllers & $scope
- Modules
- Routing & multiple views
- Factories & Services
- Directives
- Promises
- Filters
- Testing with Karma

Other features of this repo:
- Token-based authentication with JWTs
- MongoDB and Mongoose
- Gulp as the build tool
- Express 4 

## Installation

- run `npm install -g gulp karma karma-cli nodemon jscs` to install global modules
- run `npm install` to install all node dependencies listed in the package.json
- run `bower install` to install all client dependencies listed in the bower.json*
- in a separate tab in your terminal, run `mongod` to start mongo up
- run `gulp` to start our server and app
- in another separate tab, run `gulp karma` to run all the tests
