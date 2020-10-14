const express = require('express');
// const shortid = require('shortid');
// const db = require('../db');

const controller = require('../controllers/user.controller');
const validate = require('../validate/user.validate');
const authMiddleware = require('../middleware/auth.middleware');
const Router = express.Router();


Router.get('/',authMiddleware.requireAuth, controller.index);

// function middleware1(req,res,next){
//     //console.log('middleware1');
//     //res.send('Helloo111');

//     next();
// }
// function middleware2(req,res,next){
//     //console.log('middleware2');

//     res.send('Helloo');
// }
// Router.get('/test', middleware1,middleware2);

Router.get('/create', controller.create);
//POST METHOD
Router.post('/create',validate.postCreate, controller.postCreate);

Router.get('/cookie', function(req,res,next){
    res.cookie('user-id',12345);
    res.send('hello');
});

Router.get('/search', controller.search);

Router.get('/:id', controller.get);

module.exports = Router;