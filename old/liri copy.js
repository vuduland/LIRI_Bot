require('dotenv').config();
require('fs');
//8. can access your keys information with this:
var Spotify = require('node-spotify-api');
var keys = require('../keys.js');
;
var spotifyThisSong =
  process.argv[2];
var songName = process.argv[3];

//get artist, song, preview, album
var spotify = new spotify(keys.spotify, ){
}


// Constructor function for Person objects
function search(artist, song, previewUrl, album) {
  this.artist = artist;
  this.song = song;
  this.previewUrl = previewUrl;
  this.album = album;
  this.search = function() {
    return this.firstName + " " + this.lastName
  };
}




// Create a Person object
var myFather = new Person("John", "Doe", 50, "blue");


// spotify = function (spotifyThisSong, songName) {
//     this.artists = artists;
//     this.name = name;
//     this.preview_url = preview_url;
//     this.url = url;
//     console.log(artists);
// }





// search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);