const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  sectionID: Number,
  sectionTitle: String,
  videoTitle: String,
  videoUrl: String,
  summary: {
    overview: { type: String, default: '' },
  },
});

const defaultCourses = [
  {
    sectionID: 1,
    sectionTitle: "Section 1: Introduction",
    videoTitle: "Welcome to the Training Module",
    videoUrl: "https://res.cloudinary.com/dyi5bnusc/video/upload/v1724245292/videos/coe55inq4veckgscrvee.mp4",
    summary: {
      overview: "Introduction to the training module, covering the basic objectives and goals.",
    },
  },
  {
    sectionID: 2,
    sectionTitle: "Section 2: Advanced Topics",
    videoTitle: "In-Depth Analysis",
    videoUrl: "https://res.cloudinary.com/dyi5bnusc/video/upload/v1724245347/videos/nmab24n6abwzll9bz5ti.mp4",
    summary: {
      overview: "Detailed analysis of advanced topics relevant to the training module.",
    },
  },
  {
    sectionID: 3,
    sectionTitle: "Section 3: Final Thoughts",
    videoTitle: "Conclusion and Next Steps",
    videoUrl: "https://res.cloudinary.com/dyi5bnusc/video/upload/v1724245348/videos/j4hsxq82ylk8yv7tanvl.mp4",
    summary: {
      overview: "Summary of the training module and guidance on next steps.",
    },
  },
];

courseSchema.statics.getDefaultCourses = function() {
  return defaultCourses;
};

module.exports = mongoose.model('Course', courseSchema);
