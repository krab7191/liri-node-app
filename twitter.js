
//jshint esversion: 6

require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require("twitter");
var twitClient = new Twitter(keys.twitter);

function getTweets() {
    var params = { screen_name: 'Dwitter89422817' };
    twitClient.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            tweets.forEach(function(i) {
                console.log(i.text);
            });
        }
    });
}

module.exports = {
    twitClient: twitClient,
    getTweets: getTweets
};