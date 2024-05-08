"use client";

import { Box, Typography } from "@mui/material";
import { Chewy, Poppins } from "next/font/google";

const chewy = Chewy({ weight: ["400"], style: ["normal"], subsets: ["latin"] });
const poppins = Poppins({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

const AppBanner = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box position="relative">
      <Box
        component="img"
        src="/images/banners/banner.png"
        alt="banner"
        sx={{ width: "100vw", position: "relative" }}
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
};
export default AppBanner;
