const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import routes
const imageRoutes = require("./routes/imageRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend communication
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/images", imageRoutes);

// Basic route
app.get("/", (req, res) => {
  res.json({
    message: "Backend server is running!",
    port: PORT,
    endpoints: {
      "Upload Image": "POST /api/images/upload",
      "Delete Image": "DELETE /api/images/delete/:publicId",
      "Get Image Details": "GET /api/images/details/:publicId",
      "Test Config": "GET /api/images/test-config",
      "Sample Upload": "POST /api/images/upload-sample",
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
