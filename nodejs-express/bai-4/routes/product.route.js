const express = require('express');
const Router = express.Router();
const controller = require('../controllers/product.controller');

Router.get('/', controller.index);

module.exports = Router;
