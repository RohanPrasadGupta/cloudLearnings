const express = require("express");
const router = express.Router();
const parser = require("../config/upload");
const Form = require("../models/Form");

// Upload image and save form data
router.post("/upload", parser.single("image"), async (req, res) => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }

    const imageUrl = req.file.path; // Cloudinary image URL
    const cloudinaryId = req.file.filename; // Cloudinary public ID
    const { name, email } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    // Create new form entry
    const newForm = new Form({
      name,
      email,
      image: imageUrl,
      cloudinaryId,
    });

    await newForm.save();

    res.status(201).json({
      message: "Form submitted successfully!",
      imageUrl,
      data: {
        id: newForm._id,
        name: newForm.name,
        email: newForm.email,
        image: newForm.image,
        createdAt: newForm.createdAt,
      },
    });
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Upload failed. Please try again." });
  }
});

// Get all form submissions
router.get("/submissions", async (req, res) => {
  try {
    const submissions = await Form.find().sort({ createdAt: -1 });
    res.json(submissions);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch submissions" });
  }
});

// Get single submission by ID
router.get("/submissions/:id", async (req, res) => {
  try {
    const submission = await Form.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({ error: "Submission not found" });
    }
    res.json(submission);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch submission" });
  }
});

module.exports = router;
