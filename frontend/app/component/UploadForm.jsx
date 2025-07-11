"use client";
import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const UploadForm = () => {
  const [formData, setFormData] = useState({ name: "", imageUrl: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, imageUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "400px",
      }}
    >
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <Button variant="contained" component="label">
        Choose Image
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileChange}
        />
      </Button>

      {formData.imageUrl && (
        <Box
          sx={{
            height: "100px",
            width: "100px",
          }}
        >
          <img src={formData.imageUrl} alt="Uploaded" />
        </Box>
      )}

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default UploadForm;
