// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

const inq = require("inquirer");
const TV = require("./search");

const Tv = function (searchTerm, showOrActor) {
    this.searchTerm = searchTerm;
    this.showOrActor = showOrActor;
}


const questions = [{
    name: "showOrActor",
    type: "list",
    message: "Show or actor",
    choices: ["show", "actor"]
},
{
    name: "searchTerm",
    message: "enter your search term"
}]

inq.prompt(questions).then(function (answer) {
    const search = new TV();

    if (answer.showOrActor === "show") {
        search.findShow(answer.searchTerm);
    } else if (answer.showOrActor === "actor") {
        search.findActor(answer.searchTerm);
    };
})

