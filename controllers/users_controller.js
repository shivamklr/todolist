module.exports.profile = function(req, res){
    console.log('users controller accessed');
    return res.render('users',{  //render an ejs file named users
        title:'USERS',
    });
    // return res.end('<h1>User Profile</h1>');
};