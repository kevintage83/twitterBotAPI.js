//This is a console indicator that the file started executing.
console.log("The bot is starting");

//This is an import statement.
var twit = require('twit');

var T = new Twit({
    consumer_key:        '...'
  , consumer_secret:     '...'
  , access_token:        '...'
  , access_token_secret: '...'
});

//Tweet "Hello, world!"
