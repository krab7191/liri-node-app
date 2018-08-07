
//jshint esversion: 6

require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require("twitter");
var twitClient = new Twitter(keys.twitter);

function getTweets() {
    twitClient.get('statuses/user_timeline', {screen_name: 'Dwitter89422817'}, function (error, tweets, response) {
        if (!error && response.statusCode === 200) {
            tweets.forEach(function(i) {
                if (tweets.indexOf(i) > 19) {
                    console.log(tweets.indexOf(i));
                }
                console.log(`${i.created_at}: "${i.text}"`);
            });
        }
        else {
            console.log(`Error occurred: ${error}`);
        }
    });
}

module.exports = {
    getTweets: getTweets
};