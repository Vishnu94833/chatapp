var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/vishnudb',{useNewUrlParser:true});
var mongoSchema=mongoose.Schema;
var singleMessageSchema=new mongoSchema({
    'message' :{
        type:String,
        required:false
    },
    'senderid' :{
        type:String,
        required:false
    },
    'receiverid' :{
        type:String,
        required:false
    },

    'sendername' :{
        type:String,
        required:false
    },
    'receivername' :{
        type:String,
        required:false
    },
    'date' :{
        type:Date,
        required:false
    }
    
});
module.exports=mongoose.model('peermessages',singleMessageSchema);