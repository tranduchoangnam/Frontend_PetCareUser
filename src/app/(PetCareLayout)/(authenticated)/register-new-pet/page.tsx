"use client";

import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "src/components/banner/AppBanner";
import ContactUs from "src/components/contact-us/ContactUs";
import { montserrat, poppins } from "src/constants/fonts";
import { toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";

type TPetInfo = {
  name: string;
  breed: string;
  age: string;
  color: string;
  gender: string;
  weight: string;
  file: File | null;
  avatar: string;
};

export default function RegisterNewPet() {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [petInfo, setPetInfo] = useState<TPetInfo>({
    name: "",
    breed: "",
    age: "",
    color: "",
    gender: "",
    weight: "",
    file: null,
    avatar: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPetInfo({
      ...petInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFileName(file.name);
    setPetInfo({ ...petInfo, file: file });
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFileName(file.name);
    setPetInfo({ ...petInfo, file: file });
  };
  const handleClearFile = () => {
    setSelectedFileName("");
    setPetInfo({ ...petInfo, file: null });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/pet/register", petInfo);
      if (response.data.status === "SUCCESS") {
        // console.log("Pet registered successfully");
        toast.success("Pet registered successfully");
      } else {
        console.error("Failed to register pet");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    if (petInfo.file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPetInfo({ ...petInfo, avatar: reader.result });
        }
      };
      reader.readAsDataURL(petInfo.file);
    }
  }, [petInfo.file]);
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
            <Grid container spacing={4} sx={{ mb: 5 }}>
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
                  label="Breed"
                  name="breed"
                  value={petInfo.breed}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                  size="small"
                  color="secondary"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Age"
                  name="age"
                  value={petInfo.age}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                  size="small"
                  color="secondary"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Gender"
                  name="gender"
                  value={petInfo.gender}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                  size="small"
                  color="secondary"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Color"
                  name="color"
                  value={petInfo.color}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                  size="small"
                  color="secondary"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Weight(kg)"
                  name="weight"
                  value={petInfo.weight}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                  size="small"
                  color="secondary"
                  required
                />
              </Grid>
            </Grid>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <div
              style={{
                border: "2px dashed #ccc",
                borderRadius: "5px",
                padding: "20px",
                textAlign: "center",
              }}
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={handleDrop}
            >
              <Box
                sx={{
                  py: 3,
                  display: "grid",
                  alignItems: "center",
                  justifyItems: "center",
                  gap: 1,
                }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => document.getElementById("fileInput")?.click()}
                >
                  Add Pet Image
                </Button>
                <Typography>Or drag and drop files</Typography>
                {selectedFileName && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography>{selectedFileName}</Typography>
                    <IconButton onClick={handleClearFile}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </div>
                )}
                <div>
                  {petInfo.file && (
                    <img
                      style={{
                        maxWidth: "250px",
                        height: "auto",
                      }}
                      src={URL.createObjectURL(petInfo.file)}
                      alt="Selected Image"
                    />
                  )}
                </div>
              </Box>
            </div>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  width: "30%",
                  textTransform: "inherit",
                  fontSize: "20px",
                  mt: 5,
                }}
                onClick={() => handleSubmit()}
              >
                Register
              </Button>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <ContactUs />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
