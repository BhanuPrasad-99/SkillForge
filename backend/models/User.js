const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"],
    maxlength: [50, "Name cannot exceed 50 characters"]
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email"
    ]
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
    select: false
  },

  avatar: {
    type: String,
    default: ""
  },

  githubUsername: {
    type: String,
    default: ""
  },

  skills: [
    {
      name: String,
      level: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
        default: "Beginner"
      }
    }
  ],

  courses: [
    {
      title: String,
      progress: {
        type: Number,
        default: 0
      }
    }
  ],

  resume: {
    filename: String,
    uploadedAt: Date
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }

}, {
  timestamps: true
});


/* Hash password before saving */
UserSchema.pre("save", async function(next) {

  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();

});


module.exports = mongoose.model("User", UserSchema);