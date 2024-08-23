const express = require('express');
const { getCourseData } = require('../controllers/courseController');
const router = express.Router();

router.get('/course', getCourseData);

module.exports = router;