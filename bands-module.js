var axios = require('axios');

var moment = require('moment');

var nodeArgs = process.argv;
// var artistName = process.argv[3];

// for (var i = 3; i < nodeArgs.length; i++) {
//   if (i > 2 && i < nodeArgs.length) {
//     artistName = artistName + ' ' + nodeArgs[i];
//   } else {
//     artistName += nodeArgs[i];
//   }
// }
// console.log(artistName);

// console.log(artistName);
var BANDS = function () {
  this.bandsintown = function (search) {
    var queryURL = 'https://rest.bandsintown.com/artists/' + search + '/events?app_id=codingbootcamp';
    axios
      .get(queryURL)
      .then(function (response) {
        // var j = JSON.stringify(response);
        console.log(JSON.stringify(response.data[0]) + 'response');
        // console.log(j + 'j');
        console.log('================================================'),
          console.log('\nVenue: ' + response.data[0].venue.name),
          console.log('\nLocale: ' + response.data[0].venue.city),
          console.log(
            '\nDate: ' + moment(response.data[0].datetime).format('LL')
          ),
          console.log('================================================');
      });
      // .catch(function (error) {
      //   if (error.response) {
      //     console.log('\n================================================'),
      //       console.log('Data: ' + error.response.data),
      //       console.log('\n================================================'),
      //       console.log('Status: ' + error.response.status),
      //       console.log('\n================================================'),
      //       console.log('Headers: ' + error.response.headers);
      //   } else if (error.request) {
      //     console.log('Error: ', error.message);
      //   }
      //   console.log(error.config);
      // });
  };
};


module.exports = BANDS;
