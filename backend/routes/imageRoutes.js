const express = require("express");
const multer = require("multer");
const cloudinaryService = require("../service/cloudinaryService");

const router = express.Router();

// Configure multer for memory storage (we'll send the buffer to Cloudinary)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Check if file is an image
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

// POST route to upload image using Node.js SDK
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    console.log("Upload request received");

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image file provided",
      });
    }

    console.log("File details:", {
      fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
    });

    // Upload to Cloudinary using buffer
    const uploadResult = await cloudinaryService.uploadFromBuffer(
      req.file.buffer,
      {
        folder: "nodeapp_uploads",
        public_id: `upload_${Date.now()}`,
      }
    );

    if (uploadResult.success) {
      res.json({
        success: true,
        message: "Image uploaded successfully",
        data: uploadResult.data,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Failed to upload image",
        error: uploadResult.error,
      });
    }
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// POST route to test upload with sample local file (for testing purposes)
router.post("/upload-sample", async (req, res) => {
  try {
    console.log("Sample upload test requested");

    // This is an example using a local file path
    // Note: You need to place a test image in the backend folder
    const sampleImagePath = "./test-image.jpg"; // Update this path as needed

    const uploadResult = await cloudinaryService.uploadImage(sampleImagePath, {
      folder: "sample_uploads",
      public_id: `sample_${Date.now()}`,
    });

    if (uploadResult.success) {
      res.json({
        success: true,
        message: "Sample image uploaded successfully",
        data: uploadResult.data,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Failed to upload sample image",
        error: uploadResult.error,
      });
    }
  } catch (error) {
    console.error("Sample upload error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// DELETE route to delete image
router.delete("/delete/:publicId", async (req, res) => {
  try {
    const { publicId } = req.params;

    console.log("Delete request for public_id:", publicId);

    const deleteResult = await cloudinaryService.deleteImage(publicId);

    if (deleteResult.success) {
      res.json({
        success: true,
        message: "Image deleted successfully",
        data: deleteResult.data,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Failed to delete image",
        error: deleteResult.error,
      });
    }
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// GET route to get image details
router.get("/details/:publicId", async (req, res) => {
  try {
    const { publicId } = req.params;

    console.log("Get details request for public_id:", publicId);

    const detailsResult = await cloudinaryService.getImageDetails(publicId);

    if (detailsResult.success) {
      res.json({
        success: true,
        message: "Image details retrieved successfully",
        data: detailsResult.data,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Failed to get image details",
        error: detailsResult.error,
      });
    }
  } catch (error) {
    console.error("Get details error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

// GET route to test Cloudinary configuration
router.get("/test-config", (req, res) => {
  try {
    const config = {
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME ? "Set" : "Not set",
      api_key: process.env.CLOUDINARY_API_KEY ? "Set" : "Not set",
      api_secret: process.env.CLOUDINARY_API_SECRET ? "Set" : "Not set",
    };

    res.json({
      success: true,
      message: "Cloudinary configuration status",
      config: config,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error checking configuration",
      error: error.message,
    });
  }
});

module.exports = router;
