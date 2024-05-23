"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import PageContainer from "src/app/demo/components/container/PageContainer";
import { IconPaw } from "src/common/icon";
import { chewy, poppins } from "src/constants/fonts";
import { imagePath } from "src/constants/imagePath";
import OurServices from "src/views/LandingPage/OurServices";

const LandingPage = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
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
      <Box
        sx={{ mx: { md: 10, xs: 5 }, my: { md: 15, xs: 5 } }}
        data-aos="fade-up"
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "700",
            color: "#000000",
            fontFamily: `${poppins.style.fontFamily}`,
            textAlign: "center",
          }}
        >
          Our {""}
          <span style={{ color: "#6F32BE" }}>Services</span>
        </Typography>
        <OurServices />
      </Box>
      <Image
        src={imagePath.BANNERLANDING2}
        alt="banner"
        style={{ width: "100%", height: "auto" }}
      />
      <Box sx={{ position: "relative" }}>
        <Image
          src={imagePath.BANNERLANDING3}
          alt="banner"
          style={{ width: "100%", height: "auto" }}
        />
        <Button
          variant="contained"
          startIcon={<IconPaw />}
          sx={{
            position: "absolute",
            left: "43%",
            top: "50%",
            fontSize: { xs: "12px", md: "24px" },
            textTransform: "initial",
            fontFamily: `${chewy.style.fontFamily}`,
          }}
        >
          Request Service
        </Button>
      </Box>
    </PageContainer>
  );
};

export default LandingPage;
