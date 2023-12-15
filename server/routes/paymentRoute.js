const express = require('express');
const paymentController = require('../controllers/paymentController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.route('/create-session').post(paymentController.createCheckoutSession);
router.route('/packages').get(paymentController.getPackages);

module.exports = router;
