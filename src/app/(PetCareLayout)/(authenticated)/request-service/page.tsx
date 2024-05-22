"use client";

import { Box, Grid, Typography } from "@mui/material";
import PageContainer from "src/app/demo/components/container/PageContainer";
import Banner from "src/components/banner/AppBanner";
import { montserrat, poppins } from "src/constants/fonts";
const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box sx={{ height: "100vh" }}>
        <Banner
          title="Choose the service you want"
          description="Fill the form below"
          imagePath="/images/banners/banner.png"
        />
        <Box marginTop="24px" padding="3rem">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                  color: "#7759CC",
                  fontSize: "30px",
                }}
              >
                Request Service
              </Typography>
              <Typography sx={{ fontFamily: montserrat.style.fontFamily }}>
                Fill the form below to request a service
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                  color: "#7759CC",
                  fontSize: "30px",
                }}
              >
                Contact us
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
