"use client";

import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { montserrat, poppins } from "src/constants/fonts";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "src/app/loading";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";

type TPetInfo = {
  id: string;
  name: string;
  breed: string;
  age: string;
  color: string;
  weight: string;
  gender: string;
  condition: string;
  avatar: string;
  disease?: string;
  medicine?: string;
  nutrition?: string;
  treatmentPeriod?: string;
};

const petInfo: TPetInfo[] = [
  {
    id: "1",
    name: "Cat",
    breed: "Cat",
    age: "2",
    color: "White",
    weight: "3.4",
    gender: "female",
    condition: "Good",
    avatar: "/images/products/cat.png",
  },
  {
    id: "2",
    name: "Nam",
    breed: "Dog",
    age: "3",
    color: "Brown",
    weight: "3.4",
    gender: "male",
    condition: "Require treatment",
    avatar: "/images/products/dog.png",
    disease: "Parvovirus",
    medicine: "Antiviral drugs",
    nutrition: "High-protein diet",
    treatmentPeriod: "2 weeks",
  },
];

export default function EditPetInfo() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [pet, setPet] = useState<TPetInfo | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (id) {
      const petData = petInfo.find((p) => p.id === id);
      setPet(petData);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPet((prevPet) => {
      if (prevPet) {
        return { ...prevPet, [name]: value };
      }
      return prevPet;
    });
  };

  const handleSave = async () => {
    if (pet) {
      try {
        await axios.put(`/api/pets/${pet.id}`, pet);
        router.push(`/my-pets/detail-pet-info?id=${pet.id}`);
      } catch (error) {
        toast.error("Failed to save pet info");
      }
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newImage = URL.createObjectURL(e.target.files[0]);
      setPet((prevPet) => {
        if (prevPet) {
          return { ...prevPet, image: newImage };
        }
        return prevPet;
      });
    }
  };

  const handleEditImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (!pet) return <Loading />;

  return (
    <Box>
      <Box sx={{ mt: 2, px: 10 }}>
        <IconButton onClick={() => router.back()}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 5, px: 20 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: 3,
                ml: 10,
              }}
            >
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                  color: "#7759CC",
                  fontSize: "30px",
                  mb: 2,
                }}
              >
                Pet Info
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <TextField
                    label="Pet Name"
                    name="name"
                    value={pet.name}
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
                    value={pet.breed}
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
                    value={pet.age}
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
                    value={pet.color}
                    onChange={handleChange}
                    sx={{ width: "100%" }}
                    size="small"
                    color="secondary"
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Weight"
                    name="weight"
                    value={pet.weight}
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
                    value={pet.gender}
                    onChange={handleChange}
                    sx={{ width: "100%" }}
                    size="small"
                    color="secondary"
                    required
                  />
                </Grid>
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
                onClick={handleSave}
              >
                Save
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ textAlign: "center", position: "relative" }}>
              <img
                src={pet.avatar}
                alt={pet.name}
                style={{ width: "50%", height: "auto" }}
              />
              <IconButton
                onClick={handleEditImageClick}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 1)",
                  },
                }}
              >
                <EditIcon />
              </IconButton>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleImageChange}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
