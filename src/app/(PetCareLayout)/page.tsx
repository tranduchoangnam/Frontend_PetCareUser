"use client";
import { Grid, Box, Typography, CardMedia } from "@mui/material";
import PageContainer from "src/app/demo/components/container/PageContainer";
import Banner from "src/components/banner/AppBanner";

const LandingPage = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box sx={{ height: "100vh" }}>
        <Banner
          // title="Choose the service you want"
          // description="Fill the form below"
          imagePath="/images/banners/banner-landing.png"
        />
      </Box>
    </PageContainer>
  );
};

export default LandingPage;
