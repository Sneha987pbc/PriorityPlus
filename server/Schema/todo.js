const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    userTitle:{
        type: String,
        required: true
    },
    userDescription:{
        type: String,
        required: true
    },
    userID:{
        type: String,
        required: true
    }
});

const Todo = mongoose.model('todos', TodoSchema);
module.exports= Todo;