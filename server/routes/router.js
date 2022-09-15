const express = require('express');
const route = express.Router()

const services = require('../services/render');
const advertisement = require('../controller/advertisement');
const adduser = require('../controller/adduser');
const apply = require('../controller/apply');
const companies = require('../controller/companies');


route.get('/', services.advRoutes);
route.get('/signup', services.signup);
route.get('/login', services.login);
route.get('/applyList', services.applyList)
route.get('/userList', services.userRoutes);
route.get('/advList', services.advList);
route.get('/add-advertisement', services.add_adv);
route.get('/companieList', services.companieList);
route.get('/add-companie', services.add_companie);


//update List
route.get('/update-user', services.update_user)
route.get('/update-adv', services.update_advertisement)
route.get('/update-apply', services.update_apply)
route.get('/update-companie', services.update_companie)

// API users
route.get('/api/users', adduser.find);
route.post('/api/users', adduser.create);
route.put('/api/users/:id', adduser.update);
route.delete('/api/users/:id', adduser.delete);
// API advertisements
route.get('/api/advertisements', advertisement.find);
route.post('/api/advertisements', advertisement.create);
route.put('/api/advertisements/:id', advertisement.update);
route.delete('/api/advertisements/:id', advertisement.delete);
// API apply
route.get('/api/apply/:id', services.applyId);
route.get('/api/apply', apply.find);
route.post('/api/apply', apply.create);
route.put('/api/apply/:id', apply.update);
route.delete('/api/apply/:id', apply.delete);
// API companie
route.get('/api/companies', companies.find);
route.post('/api/companies', companies.create);
route.put('/api/companies/:id', companies.update);
route.delete('/api/companies/:id', companies.delete);


module.exports = route;