const Spotify = require('node-spotify-api');
// var SPOTIFY_ID = '5a952f9fbb954d04b0ef86344579f0cd';
const spotify = new Spotify({
  id: '5a952f9fbb954d04b0ef86344579f0cd',
  secret: 'd366a03b6dc9489b9b5a39cb13844819',
});

// eslint-disable-next-line prettier/prettier
spotify.search({ type: 'track', query: 'Blow' }, function(err, data) {
  if (err) {
    return console.log(`Error occurred: ${err}`);
  }

  // console.log(data.tracks.items[1]);
  console.log(`artists: ${data.tracks.items[1].album.artists[0].name}`);
  console.log(`preview url: ${data.tracks.items[1].preview_url}`);
  console.log(`external url: ${data.tracks.items[1].external_urls.spotify}`);
  console.log(`album name: ${data.tracks.items[1].album.name}`);
});

// SPOTIFY_ID=5a952f9fbb954d04b0ef86344579f0cd
// SPOTIFY_SECRET=d366a03b6dc9489b9b5a39cb13844819
