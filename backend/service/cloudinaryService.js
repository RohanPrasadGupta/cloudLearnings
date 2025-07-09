const cloudinary = require("../config/cloudinary");

class CloudinaryService {
  // Upload image from local file path
  async uploadImage(filePath, options = {}) {
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: options.folder || "uploads",
        public_id: options.public_id || undefined,
        transformation: options.transformation || undefined,
        resource_type: "image",
      });

      console.log("Upload successful:", result);
      return {
        success: true,
        data: {
          public_id: result.public_id,
          secure_url: result.secure_url,
          width: result.width,
          height: result.height,
          format: result.format,
          bytes: result.bytes,
          created_at: result.created_at,
        },
      };
    } catch (error) {
      console.error("Upload failed:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  // Upload image from buffer (useful for file uploads from forms)
  async uploadFromBuffer(buffer, options = {}) {
    try {
      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              folder: options.folder || "uploads",
              public_id: options.public_id || undefined,
              transformation: options.transformation || undefined,
              resource_type: "image",
            },
            (error, result) => {
              if (error) {
                console.error("Upload failed:", error);
                reject({
                  success: false,
                  error: error.message,
                });
              } else {
                console.log("Upload successful:", result);
                resolve({
                  success: true,
                  data: {
                    public_id: result.public_id,
                    secure_url: result.secure_url,
                    width: result.width,
                    height: result.height,
                    format: result.format,
                    bytes: result.bytes,
                    created_at: result.created_at,
                  },
                });
              }
            }
          )
          .end(buffer);
      });
    } catch (error) {
      console.error("Upload failed:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  // Delete image by public_id
  async deleteImage(publicId) {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      console.log("Delete result:", result);
      return {
        success: result.result === "ok",
        data: result,
      };
    } catch (error) {
      console.error("Delete failed:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  // Get image details
  async getImageDetails(publicId) {
    try {
      const result = await cloudinary.api.resource(publicId);
      console.log("Image details:", result);
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      console.error("Failed to get image details:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  // Example of sample code functionality - upload with transformations
  async uploadWithTransformation(filePath) {
    try {
      // Sample transformation: resize to 300x300 and convert to WebP
      const result = await cloudinary.uploader.upload(filePath, {
        folder: "sample_uploads",
        transformation: [
          { width: 300, height: 300, crop: "fill" },
          { quality: "auto", fetch_format: "auto" },
        ],
      });

      console.log("Sample upload with transformation:", result);
      return {
        success: true,
        data: result,
      };
    } catch (error) {
      console.error("Sample upload failed:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }
}

module.exports = new CloudinaryService();
