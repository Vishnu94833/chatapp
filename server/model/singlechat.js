var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vishnudb', { useNewUrlParser: true });
var Schema = mongoose.Schema;
var chatSchema=new Schema({
    "senderid":{type:String,required:true},
   "sendername" :{type:String,required:true},
    "receiverid":{type:String,required:true},
    "receivername":{type:String,required:true},
    "message":{type:String,required:true},
    "date":{type:Date,default:Date.now}
})
module.exports = mongoose.model('singlechat', chatSchema);