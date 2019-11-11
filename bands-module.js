var axios = require('axios');
var moment = require('moment');
var nodeArgs = process.argv;
var songName = "";

for (let i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        songName = songName + '+' + nodeArgs[i];
    }
    
}