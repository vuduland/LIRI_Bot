require('dotenv').config({ path: '.env' });
var FS = require('./fsMod');
var SPOTIFY = require('./spotify-module');
var OMDB = require('./omdb-module.js');
var BANDS = require('./bands-module');

var get = new SPOTIFY();
var omdb = new OMDB();
var bands = new BANDS();
var fs = new FS();

var queryType = process.argv[2];
var query = process.argv[3];


switch (queryType) {
  case 'omdb-this':
    omdb.getMovie();
    break;
  case 'spotify-this-song':
    get.getSong(query);
    break;
  case 'concert-this':
    bands.bandsintown(query);
    break;
  case 'call-from-file':
    fs.callFromFile();
    break;
  default:
    console.log(
      'Error: Re-enter search with parameters: "omdb-this", "spotify-this-song", "concert-this" or "call-from-file"');
    break;
}




