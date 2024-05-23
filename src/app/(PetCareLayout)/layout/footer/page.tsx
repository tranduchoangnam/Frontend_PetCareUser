"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { imagePath } from "src/constants/imagePath";
import { chewy, montserrat } from "src/constants/fonts";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          mt: 6,
          pt: 2,
          px: 5,
          // background: "#FDF3DC",
          borderTop: "2px solid #FDF3DC",
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
        }}
      >
        <Image
          src={imagePath.LOGO.src}
          alt="logo"
          width={imagePath.LOGO.width}
          height={imagePath.LOGO.height}
        />
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: `${chewy.style.fontFamily}`,
              color: "#7759CC",
              textAlign: "center",
              mb: 3,
            }}
          >
            Working Hours
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: `${montserrat.style.fontFamily}`,
            }}
          >
            Monday - Sunday: 10 am - 9 pm <br /> All holidays & school vacations
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: `${chewy.style.fontFamily}`,
              color: "#7759CC",
              mb: 3,
            }}
          >
            Location
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: `${montserrat.style.fontFamily}`,
            }}
          >
            Happy Pet Care 151 Sutherland
            <br /> Rd.Brighton, MA
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: `${chewy.style.fontFamily}`,
              color: "#7759CC",
              mb: 3,
            }}
          >
            Contact
          </Typography>
          <Box
            sx={{
              fontSize: "14px",
              fontFamily: `${montserrat.style.fontFamily}`,
            }}
          >
            Got question? Call us
            <Typography sx={{ fontWeight: "700" }}>617-608-3131</Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: `${chewy.style.fontFamily}`,
              color: "#7759CC",
              mb: 3,
            }}
          >
            Follow
          </Typography>
          <Box
            sx={{
              fontSize: "30px",
              color: "#7759CC",
              cursor: "pointer",
            }}
          >
            <InstagramIcon
              onClick={() => window.open("https://www.instagram.com/", "blank")}
            />
            <FacebookIcon
              onClick={() => window.open("https://www.facebook.com/", "blank")}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
