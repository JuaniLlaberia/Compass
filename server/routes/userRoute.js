const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/update')
  .patch(authController.protect, userController.updateUser);

module.exports = router;
