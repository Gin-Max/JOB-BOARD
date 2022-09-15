const axios = require('axios');
//const localStorage = require('localstorage');

exports.userRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
      //  try {localStorage.get('user'); } 
       // catch (error) {
       //     console.log(error);
        //}
           // console.log("quelque chose"+ localStorage.get('user') + " tata ");
        //let storage = localStorage.get('user');
        //let token = '';
        //if (storage != null) {
        //    token = JSON.parse(storage);
            res.render('userList', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.applyId = (req, res) =>{
    res.render("apply", { advertisementId : req.params.id });
}

exports.companies = (req, res) =>{
    res.render('companies');
}

exports.login = (req, res) =>{
    res.render('login');
}

exports.signup = (req, res) =>{
    res.render('signup');
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.add_companie = (req, res) =>{
    res.render('add_companie');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.update_companie = (req, res) =>{
    axios.get('http://localhost:3000/api/companies', { params : { id : req.query.id }})
        .then(function(companiedata){
            res.render("update_companie", { companie : companiedata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.update_apply = (req, res) =>{
    axios.get('http://localhost:3000/api/apply', { params : { id : req.query.id }})
        .then(function(applydata){
            res.render("update_apply", { apply : applydata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.advRoutes = (req, res) => {
    // Make a get request to /api/advertisements
    axios.get('http://localhost:3000/api/advertisements')
        .then(function(response){
            res.render('index', { advertisements : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.advList = (req, res) => {
    // Make a get request to /api/advertisements
    axios.get('http://localhost:3000/api/advertisements')
        .then(function(response){
            res.render('advList', { advertisements : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.companieList = (req, res) => {
    // Make a get request to /api/companies
    axios.get('http://localhost:3000/api/companies')
        .then(function(response){
            res.render('companieList', { companies : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.applyList = (req, res) => {
    // Make a get request to /api/apply
    axios.get('http://localhost:3000/api/apply')
        .then(function(response){
            res.render('applyList', { apply : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_adv = (req, res) =>{
    res.render('add_adv');
}


exports.update_advertisement = (req, res) =>{
    axios.get('http://localhost:3000/api/advertisements', { params : { id : req.query.id }})
        .then(function(advertisementdata){
            res.render("update_adv", { advertisement : advertisementdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

