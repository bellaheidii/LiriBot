//set requires for external files and packages
require("dotenv").config();

//variables 


var keys = require("./keys.js");

var requeust = require('request');

var moment = require('moment');

var inquirer = requuire('inquirer');

var fs = requuire('fs');

var keys = require('./keys.js');

var spotify = new Spotify(keys.spotify);

// helper function to deal with bad data or error  
function isValidProperty(obj, propertyName) {
    if (obj.propertyName !== null) {
        return false;
    }
    if obj.hasOwnProperty(propertyName)) {
        if (obj.propertyName !== null) {
            return true;
        }
    }
    return false;

    var spotify = new Spotify(keys.spotify);

    //object that holds commands and method 

    var dothis = {
        commands: ['concert-this', 'spotify-this-song', 'movie-this', 'do-what-it-says'],
        action(com, input) {
            //concert-this command 
            if (com === this.commands[0]) {
                request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp",
                    function (err, response, body) {
                        if (err) {
                            //if error print error
                            console.log('error:' err);
                        }
                        //below "200" means resoponse was succesful 
                        if (response.statusCode != 200) {
                            console.log('statusCode:', response && response.statusCode);
                        }
                        else {
                            //fix to eliminate bad results 
                            try {
                                var result = JSON.parse(body)
                            } catch (error) {
                                //return is used to skip  the rest of the process
                                return console.log('Results not Available. Check spelling or try again.')
                            }
                            //number of results to show, no matter how many are returned
                            var limit = 10
                            if (result === undefined || result[0] === undefined) {
                                console.log('No results found')

                            }
                            else {
                                for (i = 0; i < limit; i++) {
                                    //if no results 
                                    if (result[i] !== undefined) {
                                        console.log('~~~~~~~~~')
                                        console.log('~Venue:', rusult[i]['venue']['name']);
                                        console.log('~Location:', result[i]['venue']['country']) + "," + result[i]['venue']['city'] + "," + result[i]['venue']['region']);
                var dte = moment(result[i]['datetime'], 'YYYY-MM-DDTHH:mm:ss').format('MM/DD/YYYY');
                console.log('~DATE:', date + '\n');
            }

        }
    }
}
});
}
   
//spotify-this-song command
else if (comm === this commands[1])
    }
}