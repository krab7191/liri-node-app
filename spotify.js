
//jshint esversion: 6

require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotClient = new Spotify(keys.spotify);

module.exports = {
    spotClient: spotClient
};