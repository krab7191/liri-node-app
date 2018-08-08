
//jshint esversion: 6

require("dotenv").config();
var lf = require('./logger.js');
var keys = require("./keys.js");
var Twitter = require("twitter");
var twitClient = new Twitter(keys.twitter);

function getTweets() {
    twitClient.get('statuses/user_timeline', {screen_name: 'Dwitter89422817'}, function (error, tweets, response) {
        var toLog = {};
        if (!error && response.statusCode === 200) {
            tweets.forEach(function(i) {
                console.log(`${i.created_at}: "${i.text}"`);
                toLog[tweets.indexOf(i)] = [i.created_at, i.text];
            });
        }
        else {
            console.log(`Error occurred: ${error}`);
            toLog.Error = error;
        }
        lf.fileLog(JSON.stringify(toLog) + "\n");
    });
}

module.exports = {
    getTweets: getTweets
};