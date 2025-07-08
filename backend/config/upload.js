const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinaryConfig");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "form_images",
    allowed_formats: ["jpg", "png", "jpeg", "gif", "webp"],
    transformation: [
      {
        width: 800,
        height: 600,
        crop: "limit",
        quality: "auto:good",
      },
    ],
  },
});

const parser = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

module.exports = parser;
