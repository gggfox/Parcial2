const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require('./config');
const { Sport } = require('./models/sport-model');
const app = express();


/* Your code goes here */
app.post('/sports/addSport/:sportId', jsonParser, (req, res) => {
    let sportID = req.param
    let name = req.body.name;
    let playerNum = req.body.num_players;
    let id = req.body.id;

    //verify parameters
    if (!(name && playerNum && id)) {
        res.statusMessage = "Some parameter is missing";
        res.statusCode(406).end();
    }
    //match id's
    if (sportID !== id) {
        res.statusMessage = "The id's dont match";
        res.statusCode(409).end();
    }

    //unique id check
    /*
    if( exist(id) ){
        res.statusMessage = " This id belongs to another spot ";
        res.statusCode(400).end();
    }
    */

    //add to db
    Sport
        .addSport(name, playerNum, id)
        .then(result => {
            res.statusCode(201).json(result);
        })
        .catch(err => {
            res.statusMessage = "There was a problem with the database";
            res.statusCode(404).end()
        });
})

app.listen(PORT, () => {
    console.log("This server is running on port 8080");
    new Promise((resolve, reject) => {
            const settings = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            };
            mongoose.connect(DATABASE_URL, settings, (err) => {
                if (err) {
                    return reject(err);
                } else {
                    console.log("Database connected successfully.");
                    return resolve();
                }
            })
        })
        .catch(err => {
            console.log(err);
        });
});