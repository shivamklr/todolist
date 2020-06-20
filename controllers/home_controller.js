module.exports.home = function(req, res){
    console.log('home controller accessed');
    
    const items = require('../models/dummy');
    return res.render('home',{ // render an ejs file named home
        title:"Home",
        items : items,
    });
    // return res.end('<h1>Express is up for TODO App</h1>');
};
//module.exports.actionName = function(rq,rs)