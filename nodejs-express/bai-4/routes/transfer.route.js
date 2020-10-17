const express = require('express');
const Router = express.Router();
const controller = require('../controllers/transfer.controller');

Router.get('/create', controller.create);
Router.post('/create', controller.postCreate);

module.exports = Router;
