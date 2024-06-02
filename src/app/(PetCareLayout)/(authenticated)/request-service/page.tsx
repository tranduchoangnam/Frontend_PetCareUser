"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PageContainer from "src/app/components/container/PageContainer";
import Banner from "src/components/banner/AppBanner";
import { montserrat, poppins } from "src/constants/fonts";
import HavePet from "./havePet/HavePet";
import HaveNot from "./haveNot/HaveNot";
import ContactUs from "src/components/contact-us/ContactUs";

const SelectService = () => {
  const [havePet, setHavePet] = useState(true);
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Banner
          title="Choose the service you want"
          description="Fill the form below"
        />
        <Box sx={{ mt: 12, px: 10 }}>
          <Grid container spacing={10}>
            <Grid item xs={7}>
              <Box sx={{ display: "flex", flexDirection: "column", rowGap: 3 }}>
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
                <Box>
                  <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid item xs={5}>
                      <Typography
                        sx={{
                          fontFamily: montserrat.style.fontFamily,
                          fontWeight: 700,
                          mr: 10,
                        }}
                      >
                        Already have your pet? *
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <Button
                        sx={{
                          backgroundColor: havePet
                            ? "secondary.main"
                            : "transparent",
                          color: havePet ? "white" : "secondary.main",
                        }}
                        onClick={() => setHavePet(true)}
                      >
                        Yes
                      </Button>
                      <Button
                        sx={{
                          backgroundColor: havePet
                            ? "transparent"
                            : "secondary.main",
                          color: havePet ? "secondary.main" : "white",
                        }}
                        onClick={() => setHavePet(false)}
                      >
                        No
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                {havePet ? <HavePet /> : <HaveNot />}
                <Box>
                  <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid item xs={5}>
                      <Typography
                        sx={{
                          fontFamily: montserrat.style.fontFamily,
                          fontWeight: 700,
                          mr: 10,
                        }}
                      >
                        Date and Time *
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <TextField
                        id="datetime-local"
                        type="datetime-local"
                        sx={{ width: "50%" }}
                        size="small"
                        color="secondary"
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: montserrat.style.fontFamily,
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    How can we help you?
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    sx={{ width: "100%" }}
                    color="secondary"
                  />
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    width: "30%",
                    textTransform: "inherit",
                    fontSize: "20px",
                    margin: "0 auto",
                  }}
                  color="secondary"
                >
                  Submit
                </Button>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <ContactUs />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default SelectService;
