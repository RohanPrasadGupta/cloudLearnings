const FormDetails = require("../models/Form");
const cloudinary = require("cloudinary").v2;

const uploadImage = async (imagePath) => {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath, options);
    // console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

exports.saveFormData = async (req, res) => {
  try {
    const { name, imageUrl } = req.body;

    const result = await uploadImage(
      imageUrl
      // "https://4.img-dpreview.com/files/p/E~C667x0S5333x4000T1200x900~articles/3925134721/0266554465.jpeg"
    );
    console.log("Image upload result:", result?.url);

    // Validate input
    if (!name || !imageUrl) {
      return res.status(400).json({ error: "Name and image URL are required" });
    }

    if (!result?.url) {
      return res.status(400).json({ error: "Image upload failed" });
    }
    // Create a new form entry
    const formData = new FormDetails({
      name,
      imageUrl: result?.url,
    });

    // Save to the database
    await formData.save();

    res.status(201).json({ message: "Form data saved successfully", formData });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
