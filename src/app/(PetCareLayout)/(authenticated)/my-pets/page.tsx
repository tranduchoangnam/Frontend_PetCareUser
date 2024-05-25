"use client";
import { Box } from "@mui/material";
import PageContainer from "src/app/demo/components/container/PageContainer";
import Banner from "src/components/banner/AppBanner";
const MyPets = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box sx={{ height: "100vh" }}>
        <Banner
          title="Choose the service you want"
          description="Fill the form below"
        />
      </Box>
    </PageContainer>
  );
};

export default MyPets;
