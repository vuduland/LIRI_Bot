console.log('this is loaded');



var spotify = function (spotifyThisSong, songName) {
    this.spotifyThisSong = spotifyThisSong;
    this.songName = songName;
}


exports.spotify = {

    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET

}