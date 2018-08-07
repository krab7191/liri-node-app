
//jshint esversion: 6

require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotClient = new Spotify(keys.spotify);

module.exports = {
    search: search
};

function search(title) {
    spotClient.search({
        type: 'track',
        query: title
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var hits = 0;
        for (var i = 0; i < data.tracks.items.length; i++) {
            var item = data.tracks.items[i];
            if (item.name.toUpperCase().trim() == title.toUpperCase().trim()) {
                i = data.tracks.items.length;
                console.log(`Song: ${item.name}`);
                console.log(`Artist: ${item.artists[0].name}`);
                console.log(`Album: ${item.album.name}`);
                if (item.preview_url == null) {
                    console.log(`Preview not available \n`);
                }
                else {
                    console.log(`Preview URL: ${item.preview_url} \n`);
                }
            }
            else {
                hits ++;
            }
            if (hits == data.tracks.items.length){
                var tit = data.tracks.items;
                console.log(`'${title.trim()}' not found...`);
                console.log(`Did you mean one of these?\n${tit[0].name}\n${tit[1].name}\n${tit[2].name}`);
            }
        }
    });
}