
//jshint esversion: 6

require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
console.log(keys.spotify);
var spotClient = new Spotify(keys.spotify);
console.log(spotClient);

module.exports = {
    spotClient: spotClient
};