const express = require('express');
const chatController = require('../controllers/chatController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.route('/').get(chatController.getChats);
router.route('/messages/:chatId').get(chatController.getMessages);

module.exports = router;
