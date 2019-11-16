/* eslint-disable no-bitwise */
require('dotenv').config({ path: '.env' });
// var fss = require('fs');
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


switch (search) {// (search && searchTwo) || search ^ searchTwo
  // search and searchTwo OR !search and searchTwo OR search and !searchTwo === (search && searchTwo) || (!search && searchTwo) || (search && !searchTwo)
  case 'movie-this':
    console.log('test');
    omdb.getMovie(searchTwo);
    // if (search !== searchTwo) {
    //   console.log(
    //     'Missing search parameter; Re-Enter search parameter "movie-this"'
    //   );
    // }
    break;
  case 'spotify-this-song':
    console.log('test2');
    get.getSong(searchTwo);
    if (!search) {
      console.log(
        'Missing search parameter; Re-Enter search parameter "spotify-this-song"'
      );
    }
    break;
  case 'concert-this':
    console.log('test3');
    bands.bandsintown(searchTwo);
    if (!search) {
      console.log(
        'Missing search parameter; Re-Enter search parameter "concert-this"'
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




