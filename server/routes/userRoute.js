const express = require('express');
const mutler = require('multer');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();
const storage = mutler.memoryStorage();
const update = mutler({ storage: storage });

router.use(authController.protect);

router.route('/').get(userController.getUsers);
router.route('/me').get(userController.getUser);
router
  .route('/update')
  .patch(update.single('profileImage'), userController.updateUser);
router.route('/matches').get(userController.getAllMatches);
router.route('/reset-likes').patch(userController.resetLikes);

module.exports = router;
