var mongoose    =   require("mongoose");
//var connect= require('../config/config');
mongoose.connect('mongodb://localhost:27017/mydb',{ useNewUrlParser: true });
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = new mongoSchema({

            'username':{
                type:String,
                required:false
            },
            'firstname'  : {
                        type : String, 
                        required: true
                    },
            'lastname':  {
                        type: String, 
                        required: false
                    },
                    'DOB':{
                        type:Date,
                        required:false
                    },
            'mobilenumber': {
                        type: Number, 
                        required: false
                    },
            'email':  {
                        type: String, 
                        required: false
                    },
            'password':   {
                            type: String, 
                            required: true
                        }
});
// create model if not exists.
module.exports = mongoose.model('userLogin',userSchema);