//This is a console indicator that the file started executing.
console.log("The bot is starting");

//This is an import statement.
var twit = require('twit');

var config = require('./config');

var T = new Twit(config);

//Tweet "Hello, world!"
15.4 Twitter API Basics - Twitter bot is next...
