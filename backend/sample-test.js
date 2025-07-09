// Sample code from the document - Node.js Cloudinary SDK
const { v2: cloudinary } = require("cloudinary");

(async function () {
  console.log("🚀 Testing the sample code from your document...\n");

  // Configuration - using your actual credentials from .env
  cloudinary.config({
    cloud_name: "cloudimagev1",
    api_key: "433649162333768",
    api_secret: "7MHoxqy_YHZVLeGDl5eea5A6cA", // Your actual API secret
  });

  console.log("✅ Configuration set with your credentials");
  console.log("Cloud Name:", "cloudimagev1");
  console.log("API Key:", "433649162333768");
  console.log("API Secret:", "7MH***" + "a5A6cA".slice(-6)); // Partially hidden for security
  console.log("");

  try {
    console.log("📤 Uploading image from URL...");

    // Upload an image - using the exact code from your document
    const uploadResult = await cloudinary.uploader
      .upload(
        "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
        {
          public_id: "shoes",
        }
      )
      .catch((error) => {
        console.log("❌ Upload error:", error);
        throw error;
      });

    console.log("✅ Upload successful!");
    console.log("Public ID:", uploadResult.public_id);
    console.log("Secure URL:", uploadResult.secure_url);
    console.log(
      "Width x Height:",
      uploadResult.width + "x" + uploadResult.height
    );
    console.log("Format:", uploadResult.format);
    console.log("Size:", uploadResult.bytes, "bytes");
    console.log("");

    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url("shoes", {
      fetch_format: "auto",
      quality: "auto",
    });

    console.log("🎨 Optimized URL (auto-format, auto-quality):");
    console.log(optimizeUrl);
    console.log("");

    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url("shoes", {
      crop: "auto",
      gravity: "auto",
      width: 500,
      height: 500,
    });

    console.log("✂️ Auto-cropped URL (500x500 square):");
    console.log(autoCropUrl);
    console.log("");

    // Additional transformations
    console.log("🌟 Additional transformation examples:");

    // Circular crop
    const circularUrl = cloudinary.url("shoes", {
      width: 300,
      height: 300,
      crop: "fill",
      gravity: "auto",
      radius: "max",
    });
    console.log("Circular crop (300x300):", circularUrl);

    // Black and white with blur
    const bwBlurUrl = cloudinary.url("shoes", {
      width: 400,
      height: 300,
      crop: "fill",
      effect: "grayscale",
      blur: "300",
    });
    console.log("B&W with blur:", bwBlurUrl);

    console.log("\n🎉 Sample code test completed successfully!");
    console.log("\n📌 Summary:");
    console.log("- Original uploaded image:", uploadResult.secure_url);
    console.log("- Optimized version:", optimizeUrl);
    console.log("- Auto-cropped version:", autoCropUrl);
    console.log("- Circular version:", circularUrl);
    console.log("- B&W blur version:", bwBlurUrl);
  } catch (error) {
    console.error("❌ Test failed:", error.message);
    if (error.http_code) {
      console.error("HTTP Code:", error.http_code);
    }
  }
})();
