/* eslint-disable no-bitwise */
require('dotenv').config({ path: '.env' });
// var fss = require('fs');
var FS = require('./fsMod');
var GET = require('./spotify-module');
var OMDB = require('./omdb-module.js');
var BANDS = require('./bands-module');

var getSong = new GET();
var omdb = new OMDB();
var bands = new BANDS();
var fs = new FS();

var searchOne = process.argv[2];
var searchTwo = process.argv.slice(3).join(' ');

function searchInput(search, search2) {
  switch ((search && search2) || search ^ search2) {
    // search and search2 OR !search and search2 OR search and !search2 === (search && search2) || (!search && search2) || (search && !search2)
    case 'movie-this':
      console.log('test');
      omdb.getMovie(search2);
      if (!search) {
        console.log(
          'Missing search parameter; Re-Enter search parameter "movie-this"'
        );
      }
      break;
    case 'spotify-this-song':
      console.log('test2');
      getSong.GetSong(search2);
      if (!search) {
        console.log(
          'Missing search parameter; Re-Enter search parameter "spoty-this-song"'
        );
    }
    break;
    case 'concert-this':
      console.log('test3');
      bands.bandsintown(search);
      if (!search) {
        console.log(
          'Missing search parameter; Re-Enter search parameter "omdb-this"'
        );
      }
      break;
    case 'call-from-file':
      console.log('test4');
      fs.callFromFile();
      if (!search) {
        console.log(
          'Missing search parameter; Re-Enter search parameter "call-from-file"'
        );
      }
      break;
    default:
      console.log(
        'Error: Re-enter search with parameters: "omdb-this", "spotify-this-song", "concert-this" or "call-from-file"'
      );
      break;
  }
}
searchInput(searchOne, searchTwo);


