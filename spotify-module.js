/* eslint-disable prefer-const */
require('dotenv').config();
const Spotify = require('node-spotify-api');
const key = require('./keys');

let spotify = new Spotify(key.spotify);
function GetSong(search) {
  this.search = search;

  spotify.search({ type: 'track', query: this.search }, function(err, data) {
    if (err) {
      return console.log(`Error occurred: ${err}`);
    }
    // console.log(data.tracks.items[1]);
    console.log(`artists: ${data.tracks.items[1].album.artists[0].name}`);
    console.log(`preview url: ${data.tracks.items[1].preview_url}`);
    console.log(`external url: ${data.tracks.items[1].external_urls.spotify}`);
    console.log(`album name: ${data.tracks.items[1].album.name}`);
  });
}

// module.exports = spotify.search();
module.exports = new GetSong();
