require('dotenv').config();
require('fs');
//8. can access your keys information with this:
// var Spotify = require('node-spotify-api');
var keys = require('../keys.js');
// var keys = 
var spotifyThisSong = process.argv[1];
var songName = process.argv[2];

//get artist, song, preview, album
var spot = new spotify();


var request = require('request'); // "Request" library

var client_id = spot.id; // Your client id
var client_secret = spot.secret; // Your secret

// var client_id = '5a952f9fbb954d04b0ef86344579f0cd';
// var client_secret = 'd366a03b6dc9489b9b5a39cb13844819';

// your application requests authorization
var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).JSON.stringify('base64'))
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
            console.log(JSON.stringify(response));
            console.log(body);
        });
    }
});

$ajax.get(authOptions){
    console.log(response);
    console.log(authOptions);
}