const express = require('express');
// const shortid = require('shortid');
// const db = require('../db');

const controller = require('../controllers/user.controller');

const Router = express.Router();


Router.get('/', controller.index);

Router.get('/create', controller.create);
//POST METHOD
Router.post('/create', controller.postCreate);

Router.get('/search', controller.search);

Router.get('/:id', controller.get);

module.exports = Router;