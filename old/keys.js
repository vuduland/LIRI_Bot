console.log('this is loaded');


var spotify = function() {
    this.id = process.env.SPOTIFY_ID;
    this.secret = process.env.SPOTIFY_SECRET;
}
var spot = new spotify();

module.exports = spot;
