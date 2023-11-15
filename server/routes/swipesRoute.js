const express = require('express');
const authController = require('../controllers/authController');
const swipesController = require('../controllers/swipesController');

const router = express.Router();

router.use(authController.protect);

router.route('/left').post(swipesController.swipeLeft);
router.route('/right').post(swipesController.swipeRight);

module.exports = router;
