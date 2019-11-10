require('dotenv').config();
require('fs');
//8. can access your keys information with this:
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
;
var spotifyThisSong = process.argv[2];
var songName = process.argv[3];


var spotify = new spotify(keys.spotify, ){
    Spotify.search
}


spotify
  .search(spotifyThisSong, { type: 'track', query: songName })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });




// spotify = function (spotifyThisSong, songName) {
//     this.artists = artists;
//     this.name = name;
//     this.preview_url = preview_url;
//     this.url = url;
//     console.log(artists);
// }





// search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);