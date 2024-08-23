const asyncHandler = require('express-async-handler');
const User = require('../models/User');

exports.getUserByUsername = asyncHandler(async (req, res) => {
  const { userName } = req.params;

  try {
    const user = await User.findOne({ name: userName });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching user data', err);
    res.status(500).json({ message: 'Server error' });
  }
});

exports.updateUserProgress = asyncHandler(async (req, res) => {
  const { userName } = req.params;
  const { courseId, progress } = req.body;
  try {

    const user = await User.findOne({ name: userName });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const courseProgress = user.courseProgress.find((item) => item.sectionId === Number(courseId));

    courseProgress.completed = progress.completed ? true : false;
    courseProgress.watchedUntil = 0;

    await user.save();
    res.status(200).json({ message: "Progress updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

exports.updateUserWatchedDuration = asyncHandler(async (req, res) => {
  const { userName } = req.params;
  const { courseId, watchedDuration } = req.body;
  try {
    const user = await User.findOne({ name: userName });

    if (user) {
      const courseProgress = user.courseProgress.find((item) => item.sectionId === Number(courseId));
      courseProgress.watchedUntil = watchedDuration;
      await user.save();
      res.status(200).json({ message: "Watched duration updated successfully" });
    }
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});