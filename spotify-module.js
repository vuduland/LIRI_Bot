require('dotenv').config();
var Spotify = require('node-spotify-api');
var key = require('./keys');

var spotify = new Spotify(key.spotify);

var GET = function () {
  this.getSong = function (search) {
    spotify.search({ type: 'track', query: search }, function (err, data) {
      if (err) {
        return console.log(`Error occurred: ${err}`);
      }
      console.log('================================================');
      console.log(`\nartists: ${data.tracks.items[1].album.artists[0].name}`);
      console.log(`\npreview url: ${data.tracks.items[1].preview_url}`);
      console.log(`\nexternal url: ${data.tracks.items[1].external_urls.spotify}`);
      console.log(`\nalbum name: ${data.tracks.items[1].album.name}`);
      console.log('================================================');

    });
  };
};
module.exports = GET;
