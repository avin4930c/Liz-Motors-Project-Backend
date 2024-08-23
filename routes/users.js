var express = require('express');
const { getUserByUsername, updateUserProgress, updateUserWatchedDuration } = require('../controllers/userController');
var router = express.Router();

router.get('/:userName', getUserByUsername);

router.post('/:userName/progress', updateUserProgress);

router.post('/:userName/watched-duration', updateUserWatchedDuration);

module.exports = router;
