"use client";
import React, { useEffect, useState } from "react";
import { CldImage } from "next-cloudinary";
import { Box } from "@mui/material";
import { CldUploadButton } from "next-cloudinary";

const UploadForm = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          height: "100px",
          width: "100px",
        }}
      >
        <img
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1752135131/hxxa80yxomd6awhnkslu.jpg`}
        />
      </Box>

      <CldUploadButton uploadPreset="auto-tag" />
    </Box>
  );
};

export default UploadForm;
