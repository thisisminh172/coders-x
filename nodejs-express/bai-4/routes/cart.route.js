const express = require('express');
const controller = require('../controllers/cart.controller');

const Router = express.Router();

Router.get('/add/:productId',controller.addToCart);

module.exports = Router;
