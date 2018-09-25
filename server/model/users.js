var mongoose    =   require("mongoose");
//var connect= require('../config/config');
mongoose.connect('mongodb://localhost:27017/vishnudb',{ useNewUrlParser: true });
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = new mongoSchema({

            'firstname'  : {
                        type : String, 
                        required: true
                    },
            'lastname':  {
                        type: String, 
                        required: true
                    },
            'mobilenumber': {
                        type: Number, 
                        required: true
                    },
            'email':  {
                        type: String, 
                        required: true
                    },
            'password':   {
                            type: String, 
                            required: true
                        }
});
// create model if not exists.
module.exports = mongoose.model('userlogins',userSchema);