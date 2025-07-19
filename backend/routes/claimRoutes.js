const express = require('express');
const router = express.Router();
const { claimPoints, getLeaderboard, getClaimHistory } = require('../controllers/claimController');

router.post('/claim', claimPoints);
router.get('/leaderboard', getLeaderboard);
router.get('/history', getClaimHistory);

module.exports = router; 