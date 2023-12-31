const express = require('express');
const mutler = require('multer');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();
const storage = mutler.memoryStorage();
const update = mutler({ storage: storage });

router.route('/reset-likes').patch(userController.resetLikes);
router.route('/server-alive').patch(userController.stayAlive);

router.use(authController.protect);

router.route('/').get(userController.getUsers);
router.route('/me').get(userController.getUser);
router
  .route('/update')
  .patch(update.single('profileImage'), userController.updateUser);
router.route('/delete').delete(userController.deleteUser);

module.exports = router;
