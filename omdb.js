//jshint esversion: 6

require("dotenv").config();
var lf = require('./logger.js');
var keys = require("./keys.js");
var request = require("request");

function getMovie(title) {
    if (!title) {
        title = "Mr. Nobody";
    }
    var url = "https://www.omdbapi.com/?apikey=" + keys.omdb.apikey + "&plot=short&t=" + title;
    var toLog = {};
    request(url, function (error, response, body) {
        if (error) {
            console.log(`Error: ${error}`);
            toLog.Error = error;
        }
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);
            console.log(`Title: ${body.Title}`);
            toLog.Title = body.Title;
            console.log(`Released: ${body.Released}`);
            toLog.Release = body.Released;
            for (var i = 0; i < body.Ratings.length; i++){
                if (body.Ratings[i].Source === "Internet Movie Database") {
                    console.log(`IMDB rating: ${body.Ratings[i].Value}`);
                    toLog.IMDB_rating = body.Ratings[i].Value;
                }
                else if (body.Ratings[i].Source === "Rotten Tomatoes") {
                    console.log(`Rotten Tomatoes rating: ${body.Ratings[i].Value}`);
                    toLog.Rotten_Tomatoes_rating = body.Ratings[i].Value;
                }
            }
            console.log(`Country: ${body.Country}`);
            toLog.Country = body.Country;
            console.log(`Language(s): ${body.Language}`);
            toLog.Language = body.Language;
            console.log(`Plot: ${body.Plot}`);
            toLog.Plot = body.Plot;
            console.log(`Actors: ${body.Actors}`);
            toLog.Actors = body.Actors;
        }
        lf.fileLog(JSON.stringify(toLog) + "\n");
    });
}

module.exports = {
    getMovie: getMovie
};
