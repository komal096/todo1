const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
    content: {
        type : String,
        required : true
    },
    category:{
        type:String,
        required:true
    },
    dueDate : {
        type : String,
        required : true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const TodoLists = mongoose.model('TodoLists', todoListSchema);
module.exports  = TodoLists;