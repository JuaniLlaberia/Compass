const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/logout', authController.protect, authController.logout);

module.exports = router;
