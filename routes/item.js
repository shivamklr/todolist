const express = require('express');

const router = express.Router();

const itemController = require('../controllers/item_controller');

// router.get('/profile', itemController.profile);
router.post('/add',itemController.itemAdd); // oute for adding an item in todo

router.get('/delete', itemController.itemRemove);// route for deleting an item in todo

router.get('/update', itemController.itemStatusChange);// router for toggling status of item

module.exports = router;