
var express= require('express');
var router=express.Router();
var app = express();
var users=require('../controller/usercontroller')
router.post("/login", users.login);
router.post('/register', users.registration);
app.use('/', router);

// ConnectDB();

module.exports=router;