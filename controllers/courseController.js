const asyncHandler = require('express-async-handler');
const Course = require('../models/Course');

exports.getCourseData = asyncHandler(async (req, res) => {
    
    try {
        const course = await Course.find();
        res.status(200).json(course);
    } catch (err) {
        console.error('Error fetching course data', err);
        res.status(500).json({ message: 'Server error' });
    }
});