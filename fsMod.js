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
      var command = 'node' + ' spotify-this-song ' + array[0] + ' ' + array[1] + '\n';
      get.getSong(array[1]);
      console.log(command);
      fs.appendFile('log.txt', command, function () {
        console.error();

      });
    });

  };
};

module.exports = FS;
