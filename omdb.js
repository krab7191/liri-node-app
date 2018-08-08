//jshint esversion: 6

require("dotenv").config();
var log = require('./liri.js');
console.log(log);
var keys = require("./keys.js");
var request = require("request");

function getMovie(title) {
    var url = "https://www.omdbapi.com/?apikey=" + keys.omdb.apikey + "&plot=short&t=" + title;
    request(url, function (error, response, body) {
        if (error) {
            console.log(`Error: ${error}`);
        }
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);
            console.log(`Title: ${body.Title}`);
            console.log(`Released: ${body.Released}`);
            for (var i = 0; i < body.Ratings.length; i++){
                if (body.Ratings[i].Source === "Internet Movie Database") {
                    console.log(`IMDB rating: ${body.Ratings[i].Value}`);
                }
                else if (body.Ratings[i].Source === "Rotten Tomatoes") {
                    console.log(`Rotten Tomatoes rating: ${body.Ratings[i].Value}`);
                }
            }
            console.log(`Country: ${body.Country}`);
            console.log(`Language(s): ${body.Language}`);
            console.log(`Plot: ${body.Plot}`);
            console.log(`Actors: ${body.Actors}`);
        }
    });
}

module.exports = {
    getMovie: getMovie
};
