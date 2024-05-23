import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { IconPaw } from "src/common/icon";
import { chewy, poppins } from "src/constants/fonts";
import { imagePath } from "src/constants/imagePath";
import OurServices from "src/views/LandingPage/OurServices";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function page() {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Image
          src={imagePath.BANNERLANDING}
          alt="banner"
          style={{ width: "100%", height: "auto" }}
        />
        <Button
          variant="contained"
          startIcon={<IconPaw />}
          sx={{
            position: "absolute",
            left: "6%",
            top: "60%",
            fontSize: { xs: "12px", md: "24px" },
            textTransform: "initial",
            fontFamily: `${chewy.style.fontFamily}`,
          }}
        >
          Request Service
        </Button>
      </Box>
      <Box sx={{ px: { md: 10, xs: 5 }, my: 20 }} data-aos="fade-up">
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#000000",
            fontFamily: `${poppins.style.fontFamily}`,
            textAlign: "center",
            mb: 3,
          }}
        >
          Take care of your pet now
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Image
                src={imagePath.NEW_PET}
                alt="cat"
                style={{ width: "100%", height: "auto" }}
              />
              <Button
                variant="outlined"
                sx={{
                  color: "#7759CC",
                  border: "3px solid #7759CC",
                  fontFamily: `${chewy.style.fontFamily}`,
                  mt: 6,
                }}
              >
                Register new pet
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Image
                src={imagePath.YOUR_PET}
                alt="cat"
                style={{ width: "100%", height: "auto" }}
              />
              <Button
                variant="outlined"
                sx={{
                  color: "#7759CC",
                  border: "3px solid #7759CC",
                  fontFamily: `${chewy.style.fontFamily}`,
                  mt: 6,
                }}
              >
                Your pets <NavigateNextIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <Image
                src={imagePath.PET_HEALTH}
                alt="cat"
                style={{ width: "100%", height: "auto" }}
              />
              <Button
                variant="outlined"
                sx={{
                  color: "#7759CC",
                  border: "3px solid #7759CC",
                  fontFamily: `${chewy.style.fontFamily}`,
                  mt: 6,
                }}
              >
                Pet health
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${imagePath.BG_LANDING.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "100vh",
          px: { md: 10, xs: 5 },
          py: 2,
        }}
        data-aos="fade-up"
      >
        <OurServices />
        <Typography
          sx={{
            mt: 10,
            fontSize: "30px",
            fontWeight: "700",
            color: "#000000",
            fontFamily: `${poppins.style.fontFamily}`,
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          Book {""}
          <span style={{ color: "#6F32BE" }}>Services</span>
        </Typography>
      </Box>
    </>
  );
}
