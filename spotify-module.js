require('dotenv').config();
var SPOTIFY = require('node-spotify-api');
var key = require('./keys');

var spotify = new SPOTIFY(key.spotify);

var Spotify = function () {

  this.getSong = function (query) {
    spotify.search({ type: 'track', query: query }, function (err, data, query) {
      var print = new Print;
      var input = data;
      print.start(err, input);

    });
  };
};

var Print = function (input) {
  var data = input;
  this.start = function (err, data) {
    if (err) {
      return console.log(`Error occurred: ${err}`);
    }
    console.log('===================================================================================');
    var name = `\nartists: ${data.tracks.items[1].album.artists[0].name}`;
    var preview_url = `\npreview url: ${data.tracks.items[1].preview_url}`;
    var external_url = `\nexternal url: ${data.tracks.items[1].external_urls.spotify}`;
    var album = `\nalbum name: ${data.tracks.items[1].album.name}`;
    console.log(name);
    console.log(preview_url);
    console.log(external_url);
    console.log(album);
    console.log('===================================================================================');
  };
};

module.exports = Spotify;
