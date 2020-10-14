const express = require('express');
// const shortid = require('shortid');
// const db = require('../db');

const controller = require('../controllers/auth.controller');
// const validate = require('../validate/user.validate');

const Router = express.Router();

Router.get('/login', controller.login);

Router.post('/login', controller.postLogin);

module.exports = Router;