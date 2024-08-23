const mongoose = require('mongoose');
const Course = require('./Course');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  courseProgress: [
    {
      sectionId: { type: Number },
      watchedUntil: { type: Number, default: 0 },
      totalDuration: { type: Number, default: 0 },
      completed: { type: Boolean, default: false },
      lastPlayedTime: { type: Number, default: 0 },
    }
  ],
});

userSchema.pre('save', async function(next) {
  if (this.courseProgress.length === 0) {
    const defaultCourses = Course.getDefaultCourses();
    this.courseProgress = defaultCourses.map(course => ({
      sectionId: course.sectionID,
      watchedUntil: 0,
      totalDuration: 0,
      completed: false,
      lastPlayedTime: 0,
    }));
  }
  next();
});

module.exports = mongoose.model('User', userSchema);