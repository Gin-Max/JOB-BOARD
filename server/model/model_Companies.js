const mongoose = require('mongoose');

var Companie = new mongoose.Schema({
    companieName : {
        type : String,
        required: true
    },
    location : {
        type : String,
        required: true
    },
    siret : {
        type : Number,
        required: true
    },
    email : {
        type : String,
        required: true
    },
   
})


const Companies = mongoose.model('Companies', Companie);

module.exports = Companies;