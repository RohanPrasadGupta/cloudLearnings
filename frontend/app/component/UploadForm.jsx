"use client";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { CldImage } from "next-cloudinary";
import { Box } from "@mui/material";

// # Environment Variables
// CLOUDINARY_CLOUD_NAME=cloudimagev1
// CLOUDINARY_API_KEY=433649162333768
// CLOUDINARY_API_SECRET=7MHoxqy_YHZVLeGDl5eea5A6cA
// MONGODB_URI=mongodb:mongodb+srv://test:%3AzjBtbK5LWqXMdqcC@cluster0.mpuz2fw.mongodb.net/cluster0
// PORT=5000

const CLOUD_NAME = "cloudimagev1";
const UPLOAD_PRESET = "your_unsigned_preset";

const UploadForm = () => {
  // const [imageUrl, setImageUrl] = useState("");
  // const [preview, setPreview] = useState(null);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setPreview(URL.createObjectURL(file)); // for preview
  //   uploadImage(file);
  // };

  // const uploadImage = async (file) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("upload_preset", UPLOAD_PRESET);

  //   try {
  //     const res = await axios.post(
  //       `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
  //       formData
  //     );
  //     setImageUrl(res.data.secure_url);
  //     console.log("Uploaded Image URL:", res.data.secure_url);
  //   } catch (err) {
  //     console.error("Upload failed", err);
  //   }
  // };

  const getImageDetails = async () => {
    try {
      const response = await axios.get(
        `https://res.cloudinary.com/cloudimagev1/image/upload/cld-sample-4.jpg`
      );
      console.log("Image Details:", response.data);
    } catch (error) {
      console.error("Error fetching image details:", error);
    }
  };
  useEffect(() => {
    getImageDetails();
  }, []);

  return (
    <Box>
      {/* <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && <img src={preview} alt="Preview" width="150" />}
      {imageUrl && (
        <div>
          <p>Uploaded Image URL:</p>
          <a href={imageUrl} target="_blank" rel="noreferrer">
            {imageUrl}
          </a>
        </div>
      )} */}

      {/* <CldImage
        src="https://res.cloudinary.com/cloudimagev1/image/upload/cld-sample-4.jpg"
        width="500"
        height="500"
        crop={{
          type: "auto",
          source: true,
        }}
      /> */}
    </Box>
  );
};

export default UploadForm;
