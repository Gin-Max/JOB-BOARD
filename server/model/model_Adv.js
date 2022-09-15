const mongoose = require('mongoose');

var adv = new mongoose.Schema({
    jobName : {
        type : String,
        required: true
    },
    location : {
        type : String,
        required: true
    },
    salary : {
        type : Number,
        required: true
    },
    description : {
        type: String,
        required: true,
    },
    detailed_description : {
        type : String,
        required: true
    },
})


const Advertisements = mongoose.model('advertisements', adv);

module.exports = Advertisements;