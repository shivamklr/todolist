const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

console.log("router loaded");

router.get('/', homeController.home);

router.use('/item', require('./item.js'));// if the home or root have item in it call middleware

module.exports = router;