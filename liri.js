// eslint-disable-next-line no-use-before-define
require('dotenv').config({ path: '.env' });
// eslint-disable-next-line no-use-before-define
const axios = require('axios');
// eslint-disable-next-line no-use-before-define
const Spotify = require('node-spotify-api');
// eslint-disable-next-line no-use-before-define
const FS = require('file-system');
// eslint-disable-next-line no-use-before-define
const require = require('./keys.js');
// eslint-disable-next-line no-use-before-define
const OMDB = require('./omdb-module.js');
// eslint-disable-next-line no-use-before-define
const SPOT = require('./spotify-module');
// eslint-disable-next-line no-use-before-define
const BANDS = require('./bands-module');

const Omdb = new OMDB();
const Spot = new SPOT();
const Bands = new BANDS();
const Fs = new FS();

const search = process.argv[2];
const searchTwo = process.argv[3];

function searchInput() {
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

      // not sure what needs to go here

      break;
    default:
      console.log(
        'Error: Re-enter search with parameters: "movie-this", "spotify-this-song", "concert this" or "call-from-file"'
      );
  }
}
