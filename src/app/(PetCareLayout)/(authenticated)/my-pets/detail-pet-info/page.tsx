"use client";

import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
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
  type: string;
  weight: string;
  gender: string;
  owner: string;
  image: string;
};

const petInfo: TPetInfo[] = [
  {
    id: "1",
    name: "Cat",
    type: "Cat",
    weight: "3.4",
    owner: "John",
    gender: "female",
    image: "/images/products/cat.png",
  },
  {
    id: "2",
    name: "Nam",
    type: "Dog",
    weight: "3.4",
    gender: "male",
    owner: "John",
    image: "/images/products/dog.png",
  },
  {
    id: "3",
    name: "Nam",
    type: "Dog",
    weight: "3.4",
    gender: "male",
    owner: "John",
    image: "/images/products/dog.png",
  },
  {
    id: "4",
    name: "Nam",
    type: "Dog",
    weight: "3.4",
    gender: "male",
    owner: "John",
    image: "/images/products/dog.png",
  },
  {
    id: "5",
    name: "Nam",
    type: "Dog",
    weight: "3.4",
    gender: "male",
    owner: "John",
    image: "/images/products/dog.png",
  },
  {
    id: "6",
    name: "Nam",
    type: "Dog",
    weight: "3.4",
    gender: "male",
    owner: "John",
    image: "/images/products/dog.png",
  },
];

export default function DetailPetInfo() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [pet, setPet] = useState<TPetInfo | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const petData = petInfo.find((p) => p.id === id);
      setPet(petData);
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
            <Box sx={{ textAlign: "center", position: "relative" }}>
              <img
                src={pet.image}
                alt={pet.name}
                style={{ width: "50%", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: 3,
                mr: 40,
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
                  Type: {""}
                </Typography>
                <span>{pet.type}</span>
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
              onClick={() => router.push(`/my-pets/edit-pet-info?id=${pet.id}`)}
            >
              Edit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
