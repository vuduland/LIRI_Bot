require('dotenv').config({ path: '.env' });
var FS = require('./fsMod');
var GET = require('./spotify-module');
var OMDB = require('./omdb-module.js');
var BANDS = require('./bands-module');

var get = new GET();
var omdb = new OMDB();
var bands = new BANDS();
var fs = new FS();

var search = process.argv[2];
var searchTwo = process.argv[3];


switch (search) {
  case 'omdb-this':
    omdb.getMovie();
    break;
  case 'spotify-this-song':
    get.getSong(searchTwo);
    break;
  case 'concert-this':
    bands.bandsintown(searchTwo);
    break;
  case 'call-from-file':
    fs.callFromFile();
    break;
  default:
    console.log(
      'Error: Re-enter search with parameters: "omdb-this", "spotify-this-song", "concert-this" or "call-from-file"');
    break;
}




