"use client";

import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { montserrat, poppins } from "src/constants/fonts";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "src/app/loading";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";

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

export default function DetailPetInfo() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [pet, setPet] = useState<TPetInfo | undefined>(undefined);

  const fetchPet = async (id: string) => {
    const res = await axios.get(`/api/pet/get?id=${id}`);
    if (res.data.status === "SUCCESS") {
      setPet(res.data.data);
    } else {
      setPet(undefined);
    }
  };
  useEffect(() => {
    if (id) {
      fetchPet(id);
    }
  }, [id]);

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
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontWeight: 700,
                  }}
                >
                  Name: {""}
                </Typography>
                <span>{pet.name}</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontWeight: 700,
                  }}
                >
                  Breed: {""}
                </Typography>
                <span>{pet.breed}</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontWeight: 700,
                  }}
                >
                  Age: {""}
                </Typography>
                <span>{pet.age}</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontWeight: 700,
                  }}
                >
                  Color: {""}
                </Typography>
                <span>{pet.color}</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontWeight: 700,
                  }}
                >
                  Weight(kg): {""}
                </Typography>
                <span>{pet.weight}</span>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: montserrat.style.fontFamily,
                    fontWeight: 700,
                  }}
                >
                  Gender: {""}
                </Typography>
                <span>{pet.gender}</span>
              </Box>
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
                onClick={() =>
                  router.push(`/my-pets/edit-pet-info?id=${pet.id}`)
                }
              >
                Edit
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ textAlign: "center", position: "relative" }}>
              <img
                src={pet.avatar||"/images/profile/pet.png"}
                alt={pet.name}
                style={{ width: "50%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 5 }} />
        <Box sx={{ ml: 10, mb: 2 }}>
          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 700,
              color: "#7759CC",
              fontSize: "30px",
              mb: 5,
            }}
          >
            Pet Treatment Details
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                }}
              >
                <span style={{ fontWeight: 700 }}>Disease: {""}</span>
                {pet.disease || "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                }}
              >
                <span style={{ fontWeight: 700 }}>Medicine: {""}</span>
                {pet.medicine || "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                }}
              >
                <span style={{ fontWeight: 700 }}>Nutrition: {""}</span>
                {pet.nutrition || "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  fontFamily: montserrat.style.fontFamily,
                }}
              >
                <span style={{ fontWeight: 700 }}>Treatment period: {""}</span>
                {pet.treatmentPeriod || "N/A"}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
