var axios = require('axios');
var nodeArgs = process.argv;
var movieName = '';

for (var i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  } else {
    movieName += nodeArgs[i];
  }
}

var queryURL = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy';
axios.get(queryURL).then(
  function (response) {
    console.log('================================================'),
      console.log('\nMovie: ' + response.data.Title),
      console.log('\nRelease: ' + response.data.Year),
      console.log('\nIMDB Rating: ' + response.data.imdbRating),
      console.log('\nRotten Tomatoes Score: ' + response.data.Ratings[1].Value),
      console.log('\nCountry: ' + response.data.Country),
      console.log('\nLanguage: ' + response.data.Language),
      console.log('\nPlot: ' + response.data.Plot),
      console.log('\nActors: ' + response.data.Actors),
      console.log('================================================')

    }
  )
  .catch(function (error) {
    if (error.response) {
      console.log('Data:  ' + error.response.data);
      console.log('\nStatus: ' + error.response.status);
      console.log('\nHeaders: ' + error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error: ' + error.message);
    }
    console.log(error.config);
  });