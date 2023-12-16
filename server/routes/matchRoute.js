const express = require('express');
const matchesController = require('../controllers/matchesController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.route('/').get(matchesController.getMatches);
router.route('/cancel/:matchId').delete(matchesController.deleteMatch);

module.exports = router;
