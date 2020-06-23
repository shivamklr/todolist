module.exports.home = function(req, res){
    console.log('home controller accessed');
    
    const db = require('../config/mongoose'); 
    const List  = require('../models/items');

    List.find({}, function(err, items){
        if(err){
            console.log(`Error $(err)`);
            return;
        }
        res.render('home',{ // render an ejs file named home
            title:"Home",
            items : items,
        });
    });
    // const items = require('../models/dummy');
};

