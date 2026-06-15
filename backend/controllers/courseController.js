const Course = require("../models/Course");

exports.createCourse = async (req, res) => {

  try {

    const course = new Course({
      title: req.body.title,
      progress: req.body.progress,
      userId: req.user.id
    });

    await course.save();

    res.json(course);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};

exports.getCourses = async (req, res) => {

  try {

    const courses = await Course.find({ userId: req.user.id });

    res.json(courses);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};