var fs = require('fs');
var Get = require('./spotify-module');
var get = new Get();
var FS = function () {
 this.callFromFile = function () {
    fs.readFile('random.txt', 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }

      var array = data.split(',');
      var command = 'node' + ' spotifyTest.js ' + array[0] + ' ' + array[1];
      get.getSong(array[1]);
      // var command = array;
      // return command;
      console.log(command);
      fs.appendFile('log.txt', command, function () {
        console.error();

      });
    });

  };
};
// var f = new FS;
// f.callFromFile();
module.exports = FS;
