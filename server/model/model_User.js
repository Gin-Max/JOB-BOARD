const mongoose = require('mongoose');

var users = new mongoose.Schema({
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
    password : {
        type : String,
        required: true
    },
    gender : String,
})


const Userdb = mongoose.model('userdb', users);

module.exports = Userdb;