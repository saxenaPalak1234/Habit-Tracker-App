const express = require('express');
const router = express.Router();

const homeController = require('../controller/homeController');

router.get('/',homeController.home);
router.use('/habit', require('./habit'));
module.exports = router;