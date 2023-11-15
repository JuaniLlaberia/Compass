const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.route('/').get(userController.getUsers);
router.route('/me').get(userController.getUser);
router.route('/update').patch(userController.updateUser);
router.route('/matches').get(userController.getAllMatches);

module.exports = router;
