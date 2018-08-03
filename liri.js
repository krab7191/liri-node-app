require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require('twitter');
var request = require("request");
var tweet = require("./tweet.js");
console.log(tweet.tweetSki());

// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var funcs = {
    tweets: function () {
        return "Twitter";
    },
    spotify: function () {
        return "Spotify";
    },
    movie: function () {
        return "Movie";
    },
    doIt: function () {
        return "Do what it says";
    }
};

if (process.argv[2]) {
    console.log(funcs[process.argv[2]]());
}
