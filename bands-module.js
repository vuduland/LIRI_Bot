var axios = require('axios');

var moment = require('moment');

var nodeArgs = process.argv;
var artistName = ' ';
var queryURL = `https://rest.bandsintown.com/artists/${artistName}/events?app_id=codingbootcamp`;

for (var i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    artistName = `${artistName}+${nodeArgs[i]}`;
  } else {
    artistName += nodeArgs[i];
  }
}
var BANDS = function () {
  this.bandsintown = function (search) {

    axios
      .get(queryURL)
      .then(function (response) {

        console.log('================================================'),
          console.log(`\nVenue: ${response.data[0].venue.name}`),
          console.log(`\nLocale: ${response.data[0].venue.city}`),
          console.log(
            `\nDate: ${moment(response.data[0].datetime).format('LL')}`
          ),
          console.log('================================================');
      })
      .catch(function (error) {
        if (error.response) {
          console.log('\n================================================'),
            console.log(`Data: ${error.response.data}`),
            console.log('\n================================================'),
            console.log(`Status: ${error.response.status}`),
            console.log('\n================================================'),
            console.log(`Headers: ${error.response.headers}`);
        } else if (error.request) {
          console.log('Error: ', error.message);
        }
        console.log(error.config);
      });
  };
};

module.exports = BANDS;
