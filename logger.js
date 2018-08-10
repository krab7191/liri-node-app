//jshint esversion: 6

const fs = require("fs");

function fileLog(data) {
    var d = new Date();
    var entry = d + " : " + data;
    fs.appendFile("./log.txt", entry, "utf8", function (err) {
        if (err) {
            console.log(`Error: ${err}`);
        }
        else {
            console.log(`\nAdding data to the logfile`);
        }
    });
}

module.exports = {
    fileLog: fileLog,
    fs: fs
};
