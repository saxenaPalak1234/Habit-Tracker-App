const express = require('express');
const router = express.Router();
const habitsController = require('../controller/habitController');
//page route
router.get('/dashboard', habitsController.habitsPage);
router.get('/weekly_view', habitsController.weeklyview);
//action route
router.post('/create', habitsController.createHabit);
router.get('/delete/:id', habitsController.deleteHabit);
router.get('/update/:id/:day/:status', habitsController.updateHabit);
module.exports = router;