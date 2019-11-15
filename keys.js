console.log('this is loaded');

const spotify = function() {
  const id = process.env.SPOTIFY_ID;
  const secret = process.env.SPOTIFY_SECRET;
  return id + secret;
};

module.exports = spotify();
// module.exports = spotify.id;
// module.exports = spotify.secret;
