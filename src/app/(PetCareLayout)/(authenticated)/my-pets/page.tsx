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
                  image={pet.image}
                  alt={pet.name}
                />
                <CardContent>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: 700 }}
                  >
                    {pet.name}
                  </Typography>
                  <Typography variant="body2" color="#4880FF">
                    {pet.weight} {""} kg
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    Owner: {pet.owner}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 2, textTransform: "initial" }}
                    onClick={() =>
                      router.push(`/my-pets/detail-pet-info?id=${pet.id}`)
                    }
                  >
                    Edit pet info
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
