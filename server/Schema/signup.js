const mongoose = require('mongoose')

const SignupSchema = mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    userEmail:{
        type: String,
        required: true
    },
    userPassword:{
        type: String,
        required: true,
        
    },
})

const Signupcode = mongoose.model('users',SignupSchema);
module.exports = Signupcode;