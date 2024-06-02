"use client";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import PageContainer from "src/app/components/container/PageContainer";
import Banner from "src/components/banner/AppBanner";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import axios from "axios";

type TPetInfo = {
  id: string;
  name: string;
  breed: string;
  weight: string;
  gender: string;
  condition: string;
  avatar: string;
};

export default function MyPets() {
  const [pets, setPets] = useState<TPetInfo[]>([]);
  const router = useRouter();
  const fetchPets = async () => {
    try {
      const response = await axios.get("/api/pet/get-all");
      if (response.data.status === "SUCCESS") {
        setPets(response.data.data);
      } else setPets([]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchPets();
  }, []);
  return (
    <PageContainer>
      <Box sx={{ mt: 4, px: 10 }}>
        <Box
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton onClick={() => router.back()}>
            <ArrowBackIcon />
          </IconButton>
          <Button
            variant="contained"
            onClick={() => router.push("/register-new-pet")}
          >
            Add New Pet
          </Button>
        </Box>
        <Grid container spacing={10}>
          {pets.map((pet, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={pet.avatar||"/images/profile/pet.png"}
                  alt={pet.name}
                />
                <CardContent>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{ fontWeight: 700 }}
                  >
                    {pet.name}
                  </Typography>
                  <Typography variant="body1" color="#4880FF">
                    {pet.weight} {""} kg
                  </Typography>
                  <Typography variant="body1" color="#4880FF">
                    Condition: {pet.condition}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 2, textTransform: "initial" }}
                    onClick={() =>
                      router.push(`/my-pets/detail-pet-info?id=${pet.id}`)
                    }
                  >
                    Pet info
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageContainer>
  );
}
