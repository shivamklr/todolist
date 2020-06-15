module.exports.home = function(req, res){
    console.log('home controller accessed');
    return res.end('<h1>Express is up for TODO App</h1>');
};