const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  progress: {
    type: Number,
    default: 0
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

});

module.exports = mongoose.model("Course", courseSchema);