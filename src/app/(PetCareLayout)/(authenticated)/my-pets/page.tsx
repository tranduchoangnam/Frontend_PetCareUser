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
import PageContainer from "src/app/demo/components/container/PageContainer";
import Banner from "src/components/banner/AppBanner";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type TPetInfo = {
  id: string;
  name: string;
  breed: string;
  weight: string;
  gender: string;
  condition: string;
  avatar: string;
};

const petInfo: TPetInfo[] = [
  {
    id: "1",
    name: "Cat",
    breed: "Cat",
    weight: "3.4",
    gender: "female",
    condition: "Good",
    avatar: "/images/products/cat.png",
  },
  {
    id: "2",
    name: "Nam",
    breed: "Dog",
    weight: "3.4",
    gender: "male",
    condition: "Require treatment",
    avatar: "/images/products/dog.png",
  },
];

export default function MyPets() {
  const router = useRouter();
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
          {petInfo.map((pet, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={pet.avatar}
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
