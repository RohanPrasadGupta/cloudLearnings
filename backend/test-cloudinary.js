// Sample test file to demonstrate Cloudinary Node.js SDK usage
const cloudinaryService = require("./service/cloudinaryService");
require("dotenv").config();

async function testCloudinaryNodeSDK() {
  console.log("🚀 Testing Cloudinary Node.js SDK...\n");

  // Test 1: Check configuration
  console.log("1. Configuration Test:");
  console.log(
    "Cloud Name:",
    process.env.CLOUDINARY_CLOUD_NAME ? "✅ Set" : "❌ Not set"
  );
  console.log(
    "API Key:",
    process.env.CLOUDINARY_API_KEY ? "✅ Set" : "❌ Not set"
  );
  console.log(
    "API Secret:",
    process.env.CLOUDINARY_API_SECRET ? "✅ Set" : "❌ Not set"
  );
  console.log("");

  // Test 2: Upload from URL (this works without needing a local file)
  console.log("2. Testing upload from URL...");
  try {
    // Using a sample image URL for testing
    const sampleImageUrl =
      "https://res.cloudinary.com/demo/image/upload/sample.jpg";

    const uploadResult = await cloudinaryService.uploadImage(sampleImageUrl, {
      folder: "test_nodejs_sdk",
      public_id: `test_upload_${Date.now()}`,
    });

    if (uploadResult.success) {
      console.log("✅ Upload successful!");
      console.log("Public ID:", uploadResult.data.public_id);
      console.log("Secure URL:", uploadResult.data.secure_url);
      console.log("Format:", uploadResult.data.format);
      console.log("Size:", uploadResult.data.bytes, "bytes");

      // Test 3: Get image details
      console.log("\n3. Testing get image details...");
      const detailsResult = await cloudinaryService.getImageDetails(
        uploadResult.data.public_id
      );

      if (detailsResult.success) {
        console.log("✅ Got image details successfully!");
        console.log("Width:", detailsResult.data.width);
        console.log("Height:", detailsResult.data.height);
        console.log("Created at:", detailsResult.data.created_at);
      }

      // Test 4: Delete the test image
      console.log("\n4. Testing delete image...");
      const deleteResult = await cloudinaryService.deleteImage(
        uploadResult.data.public_id
      );

      if (deleteResult.success) {
        console.log("✅ Image deleted successfully!");
      } else {
        console.log("❌ Failed to delete image:", deleteResult.error);
      }
    } else {
      console.log("❌ Upload failed:", uploadResult.error);
    }
  } catch (error) {
    console.error("❌ Test failed:", error.message);
  }

  console.log("\n🏁 Test completed!");
}

// Run the test if this file is executed directly
if (require.main === module) {
  testCloudinaryNodeSDK();
}

module.exports = { testCloudinaryNodeSDK };
