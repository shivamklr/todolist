module.exports.itemAdd = function(req, res){
    console.log('home controller for post reached');
    const items = require('../models/dummy');
    req.body.status = 0; // setting status of todo to 0 by default
    items.push(req.body);
    res.redirect('back');
};

module.exports.itemRemove = function(req, res){
    const text = req.query.itemText;
    const items = require('../models/dummy');
    const itemIndex = items.findIndex(item => item.todoText == text);
    items.splice(itemIndex, 1);
    console.log(items);
    // console.log(req.query);
    res.redirect('back');
};

module.exports.itemStatusChange = function(req, res){
    const items = require('../models/dummy');
    const text = req.query.itemText;
    const currentStatus = req.query.status;
    const itemIndex = items.findIndex(item => item.todoText == text);
    items[itemIndex].status = currentStatus ^ 1;
    console.log(items);
    res.redirect('back');
};