const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoText:{
        type: String,
        required : true,
    },
    status:{
        type: Number,
        required : true,
    }
});

const List = mongoose.model('List', todoSchema);
module.exports = List;