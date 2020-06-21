module.exports.home = function(req, res){
    console.log('home controller accessed');
    
    const items = require('../models/dummy');
    return res.render('home',{ // render an ejs file named home
        title:"Home",
        items : items,
    });
};

// module.exports.itemAdd = function(req, res){
//     console.log('home controller for post reached');
//     const items = require('../models/dummy');
//     req.body.status = 0; // setting status of todo to 0 by default
//     items.push(req.body);
//     res.redirect('back');
// };
//module.exports.actionName = function(rq,rs)