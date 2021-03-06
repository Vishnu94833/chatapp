var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var users=require("./server/controller/usercontroller")
                //  ./api/controller/userController

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));
var router = require('./server/router/route')
app.use('/', router);



server.listen(4000);
console.log("Listening to PORT 4000");

app.use(express.static('./public'));


io.on('connection', function (client) {
    console.log("socket connected")
    client.on('disconnect',function () {
        console.log("socket disconnected");
    })
   

client.on('tobackend',function (data) {

    console.log('...........................');
    
    users.addtodb(data.userid,data.message,data.date, data.username);
                // data.userid, data.username,
    io.emit('tofrontend',data)
})
client.on('singleChatBackend',function(data){
    console.log(data.receiverid);
    
    users.singlechat(data.message,data.senderid,data.receiverid,data.sendername,data.receivername,data.date)
    io.emit(data.receiverid,data);
})

})
//  console.log("Listening to PORT 4000");



// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/my_db', { useNewUrlParser: true });


