exports.registration = function (req, res) {

    var usermod = require('../model/users.js');
    var db = new usermod();
    var response = {};
    db.firstname = req.body.firstname;
    db.lastname = req.body.lastname;
    db.mobilenumber = req.body.mobilenumber;
    db.email = req.body.email;
    // Hash the password using SHA1 algorithm.
    db.password = require('crypto')
        .createHash('sha1')
        .update(req.body.password)
        .digest('base64');
    db.save(function (err) {
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
        if (err) {
            response = { "error": true, "message": "Error adding data", "err": err };
        } else {
            response = { "error": false, "message": "Data added" };
        }
        res.json(response);
    });
}

exports.login = function (req, res) 
{
    var usermod = require('../model/users.js');
    var db = new usermod();
    var response = {};
    usermod.find(db.firstname = req.body.firstname,function(err,data){
    
    // db.lastname = req.body.lastname;
    // db.mobilenumber = req.body.mobilenumber;
    // db.email = req.body.email;
    // Hash the password using SHA1 algorithm.
    
    db.password = require('crypto')
    .createHash('sha1')
    .update(req.body.password)
    .digest('base64'),
    db.save(function (err) {
        // save() will run insert() command of MongoDB.
        // it will add new data in collection.
        if (err) {
            response = { "error": true, "message": "Error adding data", "err": err };
        } else {
            response = { "error": false, "message": "Data added" };
        }
        res.json(response);
    
    });
});
}