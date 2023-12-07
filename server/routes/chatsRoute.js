const express = require('express');
const chatController = require('../controllers/chatController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(authController.protect, chatController.getChats);
router
  .route('/messages/:chatId')
  .get(authController.protect, chatController.getMessages);

module.exports = router;
