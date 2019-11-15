console.log('this is loaded');
// eslint-disable-next-line vars-on-top
const Spotify = function() {
  this.id = process.env.SPOTIFY_ID;
  this.secret = process.env.SPOTIFY_SECRET;
};
// var spot = new spotify(), {

// }
module.exports = Spotify;
console.log(Spotify.secret);
