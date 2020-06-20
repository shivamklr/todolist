const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/profile', usersController.profile);

router.post('/profile', function(req, res){
    console.log(req.body);
    res.redirect('back');
});

module.exports = router;