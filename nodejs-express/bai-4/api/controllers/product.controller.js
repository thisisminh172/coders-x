const db = require('../../db');
//const Product = require('../models/product.model');
// const shortid = require('shortid');

module.exports.index = (req, res) => {
    
    var products = db.get('products').value();
    res.json(products);
    
};