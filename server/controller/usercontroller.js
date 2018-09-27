
exports.login = function (req, res) {
    var usermod = require('../model/users.js');
    var db = new usermod();
    var response = {};

    email = req.body.email;
    password = require('crypto')
        .createHash('sha1')
        .update(req.body.password)
        .digest('base64');
    usermod.find({ email: email, password: password }, function (err, result) {


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

}



exports.listOfUsers=function (req,res) {
    // return res.status(200).send("all good");
    var userModel = require('../model/users.js');
    var response = {};
    var arrList=[];
    var userid=req.params.id;
    userModel.find({"_id":{$ne:userid }},function (err,data) {
        console.log(data);
        for(key in data){
                arrList.push(response={email:data[key].email,
                                        userid:data[key]._id});
        }
        if(err)
            {
                response={ "error":true,
                            "message":"error retrieving data"
                }
            }
            else{
                response={
                    "error":false,
                    "message":arrList
                }
            }
        return res.status(200).send(response);
    })
}

















// exports.registration = function (req, res) {

//     const { check } = require('express-validator/check')

//     var usermod = require('../model/users.js');
//     var validator = require('express-validator');
//     var db = new usermod();
//     var response = {};

//     db.post('/register', [
//         check('firstname').isLength({ min: 3 }),
//         check('lastname').isLength({ min: 3 }),
//         check('mobilenumber').isMobilePhone("en-IN"),
//         check('email').isEmail(),
//         check('password').isLength({ min: 5 })
//     ], (req, res) => {
//         const firstname = req.body.firstname
//         const lastname = req.body.lastname
//         const mobilenumber = req.body.mobilenumber
//         const email = req.body.email
//         const password = req.body.password


//         db.firstname = req.body.firstname;
//         db.lastname = req.body.lastname;
//         db.mobilenumber = req.body.mobilenumber;

//         db.email = req.body.email;
//         // Hash the password using SHA1 algorithm.
//         db.password = require('crypto')
//             .createHash('sha1')
//             .update(req.body.password)
//             .digest('base64');
//         db.save(function (err) {
//             // save() will run insert() command of MongoDB.
//             // it will add new data in collection.
//             if (err) {
//                 response = { "error": true, "message": "Error adding data", "err": err };
//             } else {
//                 response = { "error": false, "message": "Data added" };
//             }
//             res.json(response);
//         });
//     })
//     //   console.log(res)


// }

