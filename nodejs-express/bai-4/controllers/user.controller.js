const db = require('../db');
const shortid = require('shortid');

module.exports.index = (req, res) => res.render('users/index',{
    users: db.get('users').value()
});

module.exports.search = function(req, res){
    var q =req.query.q;
    var matchedUsers = db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index',{
        q:q,
        users:matchedUsers
    });
};

module.exports.create = function(req,res){
    res.render('users/create');
};

module.exports.postCreate = function(req,res){
    req.body.id = shortid.generate();
    var errors =[];
    if(!req.body.name){
        errors.push('Name is required.');
    }
    if(!req.body.phone){
        errors.push('Phone is required.');
    }

    if(errors.length){
        res.render('users/create',{
            errors: errors,
            values: req.body
        });
        return;
    }
    db.get('users').push(req.body).write();
    res.redirect('/users');
};

module.exports.get = function(req,res){
    //dung ham typeof de kiem tra kieu cua tham so tra ve
    //nếu để là userId thì bên dưới phải để là params.userId
    // var id = parseInt(req.params.id);
    var id = req.params.id;
    var user = db.get('users').find({id: id}).value();
    res.render('users/view',{
        user: user
    });
};