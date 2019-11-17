require('dotenv').config();
var Spotify = require('node-spotify-api');
var key = require('./keys');

var spotify = new Spotify(key.spotify);

var GET = function () {

  this.getSong = function (query) {
    spotify.search({ type: 'track', query: query }, function (err, data, query) {
      var print = new Print;
      var quotes = new Quotes;
      var input = data;

      input = quotes.around(query);
      print.start(err, input);

    });
  };
};

var Print = function (input) {
  var data = input;
  this.start = function (err, data) {
    if (err) {
      return console.log(`Error occurred: ${err}`);
    }
    console.log('===================================================================================');
    var name = `\nartists: ${data.tracks.items[1].album.artists[0].name}`;
    var preview_url = `\npreview url: ${data.tracks.items[1].preview_url}`;
    var external_url = `\nexternal url: ${data.tracks.items[1].external_urls.spotify}`;
    var album = `\nalbum name: ${data.tracks.items[1].album.name}`;
    console.log(name);
    console.log(preview_url);
    console.log(external_url);
    console.log(album);
    console.log('===================================================================================');
  };
};
var Quotes = function () {
  var nodeArgs = process.argv;
  this.around = function (query) {
    var input = query;
    for (var i = 3; i < nodeArgs.length; i++) {
      if (i > 2 && i < nodeArgs.length) {
        input = input + ' ' + nodeArgs[i];
      } else {
        input += nodeArgs[i];
      }
    }
    function myGeeks() {
      var str = "" + input.value() + '"';
      return str;
    }
    var q = String("'");
    var s = q + String(input) + q;
    String(s);
    console.log(s);
    console.log((input.substr(10) + " <<<<<<<<<<<<<<<<<<<<<<"));
    return input.substr(10);
  };
};

module.exports = GET;
