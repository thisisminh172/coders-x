const db = require('../db');
const shortid = require('shortid');

module.exports.index = (req, res) => {
    var page = parseInt(req.query.page) || 1;// n
    var perPage = 8;

    var start = (page-1) *perPage;

    var end = page * perPage;
    var drop = (page-1)*perPage;
    res.render('products/index',{
    //products: db.get('products').value().slice(start,end) //kiểu phổ biến
    products: db.get('products').drop(drop).take(perPage).value()
});
};