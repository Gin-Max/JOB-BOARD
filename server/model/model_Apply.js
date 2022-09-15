const mongoose = require('mongoose');

var Applied = new mongoose.Schema({
    advertisementId: {
        type: String,
        required: true
    },
    firstName : {
        type : String,
        required: true
    },
    lastName : {
        type : String,
        required: true
    },
    location : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phone : {
        type: Number,
        required: true,
        unique: true
    },
    studies : {
        type: String,
        required: true,
    },
})


const Apply = mongoose.model('Apply', Applied);

module.exports = Apply;