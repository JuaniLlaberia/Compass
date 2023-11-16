const express = require('express');
const matchesController = require('../controllers/matchesController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/cancel/:matchId')
  .delete(authController.protect, matchesController.deleteMatch);

module.exports = router;
