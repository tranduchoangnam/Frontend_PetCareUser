import { Box, Typography } from "@mui/material";
import React from "react";
import { montserrat, poppins } from "src/constants/fonts";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactUs() {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: poppins.style.fontFamily,
          fontWeight: 700,
          color: "secondary.main",
          fontSize: "30px",
          mb: 2,
        }}
      >
        Contact us
      </Typography>
      <Typography
        sx={{
          fontFamily: montserrat.style.fontFamily,
          fontWeight: 700,
          fontSize: "18px",
        }}
      >
        We are open for any suggestion or just to have a chat!
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: 2, mt: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PhoneIcon
            sx={{ color: "secondary.main", fontSize: "32px", mr: 2 }}
          />
          02135617-608-3131
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EmailIcon
            sx={{ color: "secondary.main", fontSize: "32px", mr: 2 }}
          />
          Happypetcare@gmail.com
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon
            sx={{ color: "secondary.main", fontSize: "32px", mr: 2 }}
          />
          Happy Pet Care 151 Sutherland Rd.Brighton, MA
        </Box>
      </Box>
    </Box>
  );
}
