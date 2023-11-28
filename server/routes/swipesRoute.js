const express = require('express');
const rateLimit = require('express-rate-limit');
const authController = require('../controllers/authController');

const swipesController = require('../controllers/swipesController');

//See if we leave it or not
const swipeLimiter = rateLimit({
  max: 1,
  windowMs: 800,
  message: 'Too many swipes registered.',
});

const router = express.Router();

router.use(authController.protect);

router.route('/left').post(swipeLimiter, swipesController.swipeLeft);
router.route('/right').post(swipeLimiter, swipesController.swipeRight);
router.route('/undo').post(swipesController.undoPreviousSwipe);

module.exports = router;
