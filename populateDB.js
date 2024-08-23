require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./models/Course');
const User = require('./models/User');

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
      
      const defaultCourses = Course.getDefaultCourses();

      await Course.insertMany(defaultCourses);
      console.log('Default courses populated.');

    const user = new User({
      name: "Avinash",
      email: "avinash4930c@gmail.com",
    });

    await user.save();
    console.log('User created and course progress auto-populated.');

    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });