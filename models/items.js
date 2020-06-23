const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({// creating a structure/schema for the db
    todoText:{
        type: String,
        required : true,
    },
    status:{
        type: Number,
        required : true,
    }
});

const List = mongoose.model('List', todoSchema);//instantiating a mongoose model
module.exports = List;