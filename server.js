var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// const validator = require('express-validator');
//var router = express.Router();
// var mongoose = require('mongoose');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));
// app.use(validator());
var router = require('./server/router/route')
app.use('/', router);

// app.post('/pages/create', function(req, res) {
// });
// app.post('registration', function(req, res) {
//     req.checkBody("email", "Enter a valid email address.");
// });

app.listen(4000);
console.log("Listening to PORT 4000");

app.use(express.static('./public'));

app.get('/checking', function(req, res){
    res.json({
       "Tutorial": "asdfghjkl qwertyuop zxcvbnm"
    });
 });
