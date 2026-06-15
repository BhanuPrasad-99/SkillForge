const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const githubRoutes = require("./routes/githubRoutes");
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Error handling middleware for JSON parsing
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ message: "Invalid JSON payload" });
  }
  next();
});

// Routes
app.use("/api/courses", courseRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/auth", authRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({ message: "Internal server error" });
});

// Database connection with error handling
mongoose.connect("mongodb://127.0.0.1:27017/skillforge")
.then(() => {
  console.log("MongoDB Connected");
  // Start server only after DB connection
  app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
  });
})
.catch(err => {
  console.error("MongoDB connection failed:", err);
  process.exit(1);
});