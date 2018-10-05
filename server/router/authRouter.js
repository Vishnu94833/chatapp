var express = require('express');
var router = express.Router();

var users = require('../controller/usercontroller.js');
var auth = require('../authentication/index.js');

router.get('/users/:id/list',auth, users.listOfUsers);
router.get('/users/:id/msgs',auth, users.getmg);
router.get('/users/getsinglechat/:receiverid/and/:senderid',users.getsinglechat);

// router.get('/users/:id/single',auth, users.getsinglechat);
module.exports = router;