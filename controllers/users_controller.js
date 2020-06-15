module.exports.profile = function(req, res){
    console.log('users controller accessed');
    return res.render('users',{
        title:'USERS',
    });
    // return res.end('<h1>User Profile</h1>');
};