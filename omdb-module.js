var axios = require('axios');

var nodeArgs = process.argv;
var search = ' ';

for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    search = search + ' ' + nodeArgs[i];
  } else {
    search += nodeArgs[i];
  }
}

var OMDB = function () {
  this.getMovie = function () {
    var queryURL = 'http://www.omdbapi.com/?t=' + search + '&y=&plot=short&apikey=trilogy';
    axios
      .get(queryURL)
      .then(function (response) {
        var resp = response;
        console.log('================================================'),
          console.log(`\nMovie: ${resp.data.Title}`),
          console.log(`\nRelease: ${resp.data.Year}`),
          console.log(`\nIMDB Rating: ${resp.data.imdbRating}`),
          console.log(`\nRotten Tomatoes Score: ${resp.data.Ratings[1].Value}`),
          console.log(`\nCountry: ${resp.data.Country}`),
          console.log(`\nLanguage: ${resp.data.Language}`),
          console.log(`\nPlot: ${resp.data.Plot}`),
          console.log(`\nActors: ${resp.data.Actors}`),
          console.log('================================================');
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.request);
        }
      });
  };
};
module.exports = OMDB;
