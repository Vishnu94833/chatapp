exports.registration = function (req, res) {

    var usermod = require('../model/users.js');
    var db = new usermod();
    var response = {};


    // var strict = /[a-zA-Z]/g
    // var strict1 = /[0-9]/g
    // var strict2 = /[!@#$%^&*+_]/g
    db.firstname = req.body.firstname;

    app.post('/pages/create', function(req, res) {
        req.checkBody("email", "Enter a valid email address.").isEmail();
      });

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


exports.login=function(req,res){
    var usermod=require('../model/users.js');
    var db=new usermod();
    var response={};
   
    email=req.body.email;
    password=require('crypto')
           .createHash('sha1')
           .update(req.body.password)
           .digest('base64');
     usermod.find({ email: email , password: password},function(err,result){


        if(err){
            response={
                "Success":false,
                "message":"Data not found in database"
            };

            return res.status(400).send(err);


        }else{
            if(result.length>0){
                var response={
                    "Success":true,
                    "message": "Login Sucessfully"

                };
                return res.status(200).send (response);
            }
            else{
                var response={
                    "Success": false,
                    "message": "Invalid Input"
                };
                return res.status (400).send(response);
            }
        }
     })             
                     
}

// exports.login = function (req, res) {

//     var usermod = require('../model/users.js');
//     var db = new usermod();
//     var response = {};
//     db.email = req.body.email;
//     // db.firstname = req.body.firstname;
//     // db.lastname = req.body.lastname;
//     // db.mobilenumber = req.body.mobilenumber;
//     // db.email = req.body.email;
//     // db.acc_id=username||email;
//     // Hash the password using SHA1 algorithm.
    
//     db.password = require('crypto')
//         .createHash('sha1')
//         .update(req.body.password)
//         .digest('base64');
//     db.save(function (err) {
//         // save() will run insert() command of MongoDB.
//         // it will add new data in collection.
//         if (err) {
//             response = { "error": true, "message": "Error adding data", "err": err };
//         } else {
//             response = { "error": false, "message": "Data added" };
//         }
//         res.json(response);
//     });
// }


