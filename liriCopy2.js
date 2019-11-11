require('dotenv').config();
var fs = require('fs');
//8. can access your keys information with this:
var spotify = require('node-spotify-api');
var spot = require('./keys.js');

// if (command === 'liriCopy2.js'){
//   continue;
//   }
var songName = process.argv[2];



var request = require('request'); // "Request" library
var client_id = spot.id; // Your client id
var client_secret = spot.secret; // Your secret

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function (error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/search?q=' + songName + '&type=track&market=US&limit=10',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function (error, response, body) {

      if (error) {
        return console.log(error);
      }
      console.log(response);
      console.log(body);
    });
  }
});