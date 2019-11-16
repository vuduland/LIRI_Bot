/* eslint-disable no-use-before-define */
/* eslint-disable no-bitwise */
/* eslint-disable prefer-const */
require('dotenv').config({ path: '.env' });
const FS = require('file-system');
// const GET = require('./spotify-module');
const OMDB = require('./omdb-module.js');
const BANDS = require('./bands-module');

// let getSong = new GET();
const omdb = new OMDB();
const bands = new BANDS();
const Fs = new FS();

const searchOne = process.argv[2];
const searchTwo = process.argv[3];

function searchInput(search, search2) {
  switch ((search && search2) || search ^ search2) {
    // search and search2 OR !search and search2 OR search and !search2 === (search && search2) || (!search && search2) || (search && !search2)
    case 'movie-this':
      console.log('test');
      omdb();
      if (!search) {
        console.log(
          'Missing search parameter; Re-Enter search parameter "movie-this"'
        );
      }
      break;
    // case 'spotify-this-song':
    //   console.log('test2');
    //   GET(search2);
    //   if (!search) {
    //     console.log(
    //       'Missing search parameter; Re-Enter search parameter "spoty-this-song"'
    //     );
    // }
    // break;
    case 'omdb-this':
      console.log('test3');
      if (!search) {
        console.log(
          'Missing search parameter; Re-Enter search parameter "omdb-this"'
        );
        bands();
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
      // searchInput();
      break;
  }
}
searchInput(searchOne, searchTwo);

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
console.log(callFromFile());
