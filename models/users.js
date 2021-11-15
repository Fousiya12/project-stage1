const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const Userschema= mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    confirmpassword:{
        type:String
    }
    
}, {timestamp: true})

const User = mongoose.model('User',Userschema)
module.exports=User;