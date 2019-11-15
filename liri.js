/* eslint-disable no-use-before-define */
require('dotenv').config({ path: '.env' });
const axios = require('axios');
const Spotify = require('node-spotify-api');
const FS = require('file-system');
const require = require('./keys.js');
const OMDB = require('./omdb-module.js');
const SPOT = require('./spotify-module');
const BANDS = require('./bands-module');

const Omdb = new OMDB();
const Spot = new SPOT();
const Bands = new BANDS();
const Fs = new FS();

const searchOne = process.argv[2];
const searchTwo = process.argv[3];

function searchInput(search) {
  switch (search) {
    case 'movie-this':
      console.log('test');
      Omdb();
      if (!search) {
        console.log(
          'Missing search parameter; Re-Enter search parameter "movie-this"'
        );
        searchInput();
      }
      break;
    case 'spotify-this-song':
      console.log('test2');
      Spot();
      if (!search) {
        console.log(
          'Missing search parameter; Re-Enter search parameter "spoty-this-song"'
        );
        searchInput();
      }
      break;
    case 'omdb-this':
      console.log('test3');
      Bands();
      if (!search) {
        console.log(
          'Missing search parameter; Re-Enter search parameter "omdb-this"'
        );
        searchInput();
      }
      break;
    case 'call-from-file':
      console.log('test4');
      callFromFile();
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
      searchInput();
      break;
  }
}
searchInput(searchOne);

function callFromFile() {
  Fs.readFile('random.txt', 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    const [array] = data.split(', ');
    const fSearch = array[0];
    searchInput(fSearch);
  });
}
