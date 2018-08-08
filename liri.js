//jshint esversion: 6

var twitClient = require("./twitter.js");
var spotClient = require("./spotify.js");
var omdb = require("./omdb.js");
var fs = require("fs");

funcs = {
    tweets: function () {
        console.log("Loading twitter keys...");
        twitClient.getTweets();
    },
    spotify: function (song) {
        console.log("Loading spotify keys...");
        spotClient.search(song);
    },
    movie: function (movie) {
        console.log("Loading OMDB API key...");
        omdb.getMovie(movie);
    },
    doIt: function () {
        fs.readFile("./random.txt", "utf8", function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                var dArr = data.split(",");
                dArr.forEach(function(i) {
                    funcs.spotify(i.trim());
                });
            }
        });
    }
};

function log (data) {
        fs.appendFile("./log.txt", data, "utf8", function(err) {
            if (err) {
                console.log(`Error: ${err}`);
            }
        });
        return true;
    }

if (process.argv[3] && funcs[process.argv[2]]) {
    // concat the args into on movie or song title
    var args = "";
    for (var i = 3; i < process.argv.length; i++) {
        args += process.argv[i] + " ";
    }
    funcs[process.argv[2]](args);
}
else if (funcs[process.argv[2]]) {
    funcs[process.argv[2]]();
}
else {
    console.log("Command not found");
}

module.exports = {
    log: log
};
