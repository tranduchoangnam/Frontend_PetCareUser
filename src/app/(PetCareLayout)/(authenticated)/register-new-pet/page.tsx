"use client";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import Banner from "src/components/banner/AppBanner";
import ContactUs from "src/components/contact-us/ContactUs";
import { montserrat, poppins } from "src/constants/fonts";
import { toast } from "react-toastify";

type TPetInfo = {
  name: string;
  type: string;
  weight: string;
  gender: string;
};

export default function RegisterNewPet() {
  const [petInfo, setPetInfo] = useState<TPetInfo>({
    name: "",
    type: "",
    weight: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPetInfo({
      ...petInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("API", petInfo);
      if (response.status === 200) {
        // console.log("Pet registered successfully");
        toast.success("Pet registered successfully");
      } else {
        console.error("Failed to register pet");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box>
      <Banner
        title="Give your pet the best experience"
        description="Fill the form below"
      />
      <Box sx={{ mt: 12, px: 10 }}>
        <Grid container spacing={10}>
          <Grid item xs={7}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                color: "#7759CC",
                fontSize: "30px",
                mb: 2,
              }}
            >
              Register New Pet
            </Typography>
            <Typography
              sx={{
                fontFamily: montserrat.style.fontFamily,
                fontWeight: 700,
                fontSize: "18px",
                mb: 5,
              }}
            >
              Please fill the form below to register your new pet
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  label="Pet Name"
                  name="name"
                  value={petInfo.name}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                  size="small"
                  color="secondary"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Pet Type"
                  name="type"
                  value={petInfo.type}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                  size="small"
                  color="secondary"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Pet Weight"
                  name="weight"
                  value={petInfo.weight}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                  size="small"
                  color="secondary"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Pet Gender"
                  name="gender"
                  value={petInfo.gender}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                  size="small"
                  color="secondary"
                  required
                />
              </Grid>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: "30%",
                  textTransform: "inherit",
                  fontSize: "20px",
                  margin: "0 auto",
                  mt: 5,
                }}
                onClick={handleSubmit}
              >
                Register
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <ContactUs />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
