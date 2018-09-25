
var express = require('express');
var router = express.Router();
var app = express();
var users = require('../controller/usercontroller')


const { check, validationResult } = require('express-validator/check');

var usermod = require('../model/users.js');
// var validator=require('express-validator');
var db = new usermod();
var response = {};



router.post("/login", function (req, res) {
    var usermod = require('../model/users.js');
    // var db = new usermod();
    // var response = {};
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    db.email = req.body.email;
    db.password = require('crypto')
        .createHash('sha1')
        .update(req.body.password)
        .digest('base64');
    usermod.find({ "email": db.email, "password": db.password }, function (err, result) {

       
        if (err) {
            response = {
                "Success": false,
                "message": "Create account to login"
            };

            return res.status(400).send(err);


        } else {
            if (result.length > 0) {
                var response = {
                    "Success": true,
                    "message": "Login Sucessfully"

                };
                return res.status(200).send(response);
            }
            else {
                var response = {
                    "Success": false,
                    "message": "Invalid Input"
                };
                return res.status(400).send(response);
            }
        }
    })

});

router.post('/register', [
    check('firstname').isLength({ min: 3 }).isAlpha(),
    check('lastname').isLength({ min: 1 }).isAlpha(),
    check('mobilenumber').isMobilePhone("en-IN"),
    check('email').isEmail(),
    check('password').isLength({ min: 5 })
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    db.firstname = req.body.firstname;
    db.lastname = req.body.lastname;
    db.mobilenumber = req.body.mobilenumber;

    db.email = req.body.email;
    // Hash the password using SHA1 algorithm.
    db.password = require('crypto')
        .createHash('sha1')
        .update(req.body.password)
        .digest('base64');

    // var fname = req.body.firstname;
    // var lname = req.body.lastname;
    // var mobile = req.body.mobilenumber;
    // var mail = req.body.email;
    // var pass = req.body.password;
    // //check(mail).isEmail();
    usermod.find({ "email": db.email }, function (err, data) {
        if (data.length > 0) {
            response = {
                "error": false,
                "message": "email is already registered",
            }
            return res.status(404).send(response);
        }
        if (err) {
            response = {
                "error": true,
                "message": "error retrieving data"
            }
            return res.status(404).send(response);
        }
        else {
            db.save(function (err) {
                console.log(db.email);
                if (err) {
                    response = {
                        "error": true,
                        "message": "error storing data"
                    }
                }
                else {
                    response = { "error": false, "message": "data added" }
                }
                return res.status(202).send(response);
            });
        }
    });

});
app.use('/', router);

// ConnectDB();

module.exports = router;