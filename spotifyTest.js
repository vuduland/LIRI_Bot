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
  case 'omdb-this':
    console.log('test');
    omdb.getMovie();
    break;
  case 'spotify-this-song':
    console.log('test2');
    get.getSong(searchTwo);
    break;
  case 'concert-this':
    console.log('test3');
    bands.bandsintown(searchTwo);
    break;
  case 'call-from-file':
    console.log('test4');
    fs.callFromFile();

    // if (command[0] === 'spotify-this-song') {
    //   get.getSong(commmand[1]);
    // }
    //  console.log('node' + ' spotifyTest.js ' + fs.callFromFile() + ' ' + fs.callFromFile());
    break;
  default:
    console.log(
      'Error: Re-enter search with parameters: "omdb-this", "spotify-this-song", "concert-this" or "call-from-file"'
    );
    break;
}




