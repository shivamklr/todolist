//controller for adding item in the todo
module.exports.itemAdd = function(req, res){
    const List  = require('../models/items');

    console.log('home controller for post reached');
    
    //creating a new item object 
    List.create({
        todoText: req.body.todoText,
        status : 0,
    }, function(err, newItem){
        if(err){
            console.log(`Error while creating item ${err}`);
            return;
        }
        res.redirect('back');
    });
};

//controller for removing item in the todo
module.exports.itemRemove = function(req, res){
    const List  = require('../models/items');
    const id = req.query.id;
    
    //find item in the database using id and delete
    List.findByIdAndDelete(id, function(err){
        if(err){
            console.log(`Error while deleting ${err}`);
            return;
        }
        return res.redirect('back');
    });
};

//controller for updating item in the todo
module.exports.itemStatusChange = function(req, res){
    const List  = require('../models/items');
    const id = req.query.id;
    const currentStatus = req.query.status;
    
    //find item in database using id and update it
    List.findByIdAndUpdate(id, {status:currentStatus^1},function(err){
        if(err){
            console.log(`Error while updating${err}`);
            return;
        }
        res.redirect('back');
    });
};