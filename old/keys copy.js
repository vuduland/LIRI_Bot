console.log('this is loaded');
var clientID = process.env.SPOTIFY_ID;
var clientSecret = process.env.SPOTIFY_SECRET;
function spot() {
  this.id = clientID;
  this.secret = clientSecret;
}
var spotify = new _spot();





const spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
export { _spot as spot };