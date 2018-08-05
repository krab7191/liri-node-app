
//jshint esversion: 6

require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require("twitter");
var twitClient = new Twitter(keys.twitter);

module.exports = {
    twitClient: twitClient
};