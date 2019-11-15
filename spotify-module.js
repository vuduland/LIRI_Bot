require('dotenv').config({ path: '.env' });
const Spotify = require('node-spotify-api');
const Keys = require('./keys.js');

const SPOT = new Spotify(Keys.spotify);

SPOT.search({ type: 'track', query: ' ' }, function(err, data) {
  if (err) {
    return console.log(`Error occurred: ${err}`);
  }
  // console.log(data.tracks.items[1]);
  console.log(`artists: ${data.tracks.items[1].album.artists[0].name}`);
  console.log(`preview url: ${data.tracks.items[1].preview_url}`);
  console.log(`external url: ${data.tracks.items[1].external_urls.spotify}`);
  console.log(`album name: ${data.tracks.items[1].album.name}`);
});

module.exports(SPOT.search());
