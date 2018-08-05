//jshint esversion: 6

var keys = require("./keys.js");
var twitClient = require("./twitter.js");
var spotClient = require("./spotify.js");
var request = require("request");
var fs = require("fs");

console.log(`Twitter client: ${twitClient}`);
console.log(`Spotify client: ${spotClient}`);

funcs = {
    tweets: function () {
        return "tweets";
    },
    spotify: function (song) {
        console.log(song);
        return "spotty";
    },
    movie: function (movie) {
        console.log(movie);
        return "movies";
    },
    doIt: function () {
        fs.readFile("./random.txt", "utf8", function (err, data) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(`OMDB API Key: ${keys.omdb}`);
                // funcs.spotify(data);
            }
        });
        return "do it!";
    },
    request: function(url, callback) {
        console.log(`Making request to ${url}`);
        console.log(`Firing callback ${callback}`);
        return "fudge";
    }
};

if (process.argv[3]) {
    console.log(funcs[process.argv[2]](process.argv[3]));
}
else if (process.argv[2]) {
    console.log(funcs[process.argv[2]]());
}
