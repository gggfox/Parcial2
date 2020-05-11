const mongoose = require('mongoose');

/* Your code goes here */
let SportCollectionSchema = {
    id: {
        required: true,
        type: Number,
        unique: true
    },
    name: {
        required: true,
        type: String
    },
    num_players: {
        required: true,
        type: Number
    }
}

let Sport = mongoose.Collection(SportCollectionSchema, {
    addSport = {
        sports.insert(id, name, num_players);
        retrun
    }
});

module.exports = {
    Sport
};