var fs = require('fs');
var FS = function () {
 this.callFromFile = function () {
    fs.readFile('random.txt', 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      var [array] = data.split(',');
      var fsearch = array[0];
      var ssearch = array[1];
      return fsearch, ssearch;
    });
  };
};
module.exports = FS;
