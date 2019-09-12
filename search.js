const axios = require("axios");
const fs = require("fs");

const TV = function () {
    this.findShow = function (show) {
        // The following URL can be used to search the TV Maze API for a given show
        const URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
        console.log(URL);
        axios.get(URL).then((response) => {
            // Place the response.data into a variable, jsonData.
            const jsonData = response.data;

            // showData ends up being the string containing the show data we will print to the console
            const showData = [
                "Show: " + jsonData.name,
                "Genre(s): " + jsonData.genres.join(", "),
                "Rating: " + jsonData.rating.average,
                "Network: " + jsonData.network.name,
                "Summary: " + jsonData.summary
            ].join("\n\n");
            console.log(showData);
        })
    };
    this.findActor = function (actor) {
        // The following URL can be used to search the TV Maze API for a given show
        const URL = "http://api.tvmaze.com/search/people?q=" + actor;
        console.log(URL);
        axios.get(URL).then((response) => {
            // Place the response.data into a variable, jsonData.
            console.log(response.data);
            const jsonData = response[0].data;

            // showData ends up being the string containing the show data we will print to the console
            const showData = [
                "name: " + jsonData.name,
                "Country: " + jsonData.country.name,
                "Birthday: " + jsonData.birthday,
                "Gender: " + jsonData.gender,
                "Summary: " + jsonData.summary
            ].join("\n\n");
            console.log(showData);
        })
    };

    this.displayShow = function () {
        console.log(this.show);
    }
};

module.exports = TV;