/* eslint-disable no-unused-expressions */
const axios = require('axios');

const nodeArgs = process.argv;
let movieName = '';

// eslint-disable-next-line no-plusplus
for (let i = 2; i < nodeArgs.length; i++) {
  if (i > 2 && i < nodeArgs.length) {
    movieName = `${movieName}+${nodeArgs[i]}`;
  } else {
    movieName += nodeArgs[i];
  }
}

const queryURL = `http://www.omdbapi.com/?t=${movieName}&y=&plot=short&apikey=trilogy`;
axios
  .get(queryURL)
  .then(function(response) {
    const resp = response;
    // eslint-disable-next-line no-sequences
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
  .catch(function(error) {
    if (error.response) {
      console.log(`Data:  ${error.response.data}`);
      console.log(`\nStatus: ${error.response.status}`);
      console.log(`\nHeaders: ${error.response.headers}`);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(
        `\n================================================\nError: ${
          error.message
        }`
      );
    }
    // console.log(error.config);
  });
