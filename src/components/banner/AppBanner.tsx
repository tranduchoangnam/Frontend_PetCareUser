"use client";

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { chewy, poppins } from "src/constants/fonts";

export default function Banner({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Box position="relative">
      <Box
        component="img"
        src="/images/banners/banner.png"
        alt="banner"
        sx={{ width: "100%", position: "relative" }}
      />
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(0, -50%)",
        }}
      >
        <Typography
          sx={{
            fontSize: "52px",
            color: "#6F32BE",
            fontFamily: `${chewy.style.fontFamily}`,
            marginBottom: "16px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "27px",
            color: "#7759CC",
            fontFamily: `${poppins.style.fontFamily}`,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
