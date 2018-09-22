var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const validator = require('express-validator');
//var router = express.Router();
var mongoose = require('mongoose');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));
app.use(validator());


var router = require('./server/router/route.js')
app.use('/', router);

app.post('/pages/create', function(req, res) {
});

app.listen(5000);
console.log("Listening to PORT 5000");

app.use(express.static('./public'));
